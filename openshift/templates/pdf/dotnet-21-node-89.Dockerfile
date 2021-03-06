FROM registry.access.redhat.com/dotnet/dotnet-21-rhel7
# This image provides a .NET Core 2.1 and upgraded Node environment you can use 
# to run your .NET applications.

ENV DOTNET_CLI_TELEMETRY_OPTOUT 1

# This setting is a workaround for issues with dotnet and certain docker versions
ENV LTTNG_UST_REGISTER_TIMEOUT 0

# Switch to root for package installs
USER 0

# Install git
RUN yum install -y bzip2 git && \
    yum clean all -y

# Install wget
RUN yum -y --setopt=tsflags=nodocs install wget && \
    yum clean all -y
	
# Install newer version of Node 
ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION  v10.13.0

RUN touch ~/.bash_profile \
    && curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.6/install.sh | bash \
    && . $NVM_DIR/nvm.sh \
    && nvm ls-remote \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default \
    && npm install -g autorest    

# Install cabextract
RUN wget http://ftp.tu-chemnitz.de/pub/linux/dag/redhat/el7/en/x86_64/rpmforge/RPMS/cabextract-1.4-1.el7.rf.x86_64.rpm && \
    yum -y install cabextract-1.4-1.el7.rf.x86_64.rpm && \    
    yum clean all -y	
	
# Install liberation-fonts
RUN yum -y install liberation-* && \    
    yum clean all -y	

# Install microsoft fonts	
RUN wget https://downloads.sourceforge.net/project/mscorefonts2/rpms/msttcore-fonts-installer-2.6-1.noarch.rpm && \
	yum -y install ./msttcore-fonts-installer-2.6-1.noarch.rpm && \
    yum clean all -y			
	
RUN rm -rf /var/cache/yum

RUN chmod -R a+rwx /usr/local/nvm
RUN mkdir -p /opt/app-root
RUN chmod -R a+rwx /opt/app-root
RUN chown -R 1001:0 /opt/app-root && fix-permissions /opt/app-root

# Run container by default as user with id 1001 (default)
USER 1001

env PATH "$PATH:/usr/local/nvm/versions/node/v10.13.0/bin" 

# Directory with the sources is set as the working directory.
WORKDIR /opt/app-root/src

# Set the default CMD to print the usage of the language image.
CMD /usr/libexec/s2i/usage

# Display installed versions
RUN node --version
RUN npm --version