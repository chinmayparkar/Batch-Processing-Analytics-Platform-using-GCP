# Batch-Processing-Analytics-Platform-using-GCP

# Pre-Requisites
1. Google Cloud Platform account >> https://cloud.google.com/gcp/
2. Select any data (preferably > 1 GB) from Kaggle or any other Data repositories >> https://www.kaggle.com/datasets

# Data Used: https://www.kaggle.com/donorschoose/io

# Process Overview
1. Creating a Compute Engine VM instance on GCP Cloud Console
2. Installing Jupyter Notebook for Data processing
3. Creating a Cloud Storage Bucket for storing pre-processed and cleaned data.
4. Installing GCS Fuse for mounting your Cloud Storage Bucket to your VM instance
5. Create an IAM service account for your python account to perform operations on Cloud Storage Bucket
6. Creating Database and Tables in BigQuery for storing processed data.
7. Using Dataflow runner for Extract, Transform and Load into Google Bigquery.
8. Visualization using Google DataStudio or ModeAnalytics.

# Let's Begin!

# 1. Creating a Compute Engine VM instance on GCP Cloud Console

1. Login to your GCP Cloud console >> Create a project and name it as per your choice >> https://prnt.sc/udvlf2

2. From the Navigation menu go to >> Compute Engine >> VM instances >> Create a new VM instance.

3. Give any instance name >> Select the Region >> Select atleast 4 core CPU and 16 GB memory for faster computations on Data. >> https://prnt.sc/udvi39

4. Select the Disk space and Operating system as per your requirement>> Allow HTTP/HTTPS traffic and Create instance >>  https://prnt.sc/udviw8

5. You will see your VM instance up and running >> https://prnt.sc/udvkg4


# 2. Installing Jupyter Notebook for Data processing

1. Opening port for Jupyter Notebook >> Navigation Menu >> VPC Network >> Firewall >> Create Firewall

2. Select any name and use these settings >> https://prnt.sc/udw0je >> I have selected port 5000 but you can use any other available port.

3. Login to your VM instance vis SSH >> https://prnt.sc/udvmge

4. Authorize gcloud and other SDK tools to access Google Cloud Platform using your user account credentials >> In your SSH terminal, run : gcloud init >> Follow the simple steps and use your authorized gmail account.

5. Select your project that you created >> In your SSH terminal, run : gcloud config set project <project-name>
  
6. Run these next commands for downloading and installing Jupyter Notebook and other packages:
  
        wget http://repo.continuum.io/archive/Anaconda3-2020.07-Linux-x86_64.sh
        bash Anaconda3-2020.07-Linux-x86_64.sh
  
7. Follow the on-screen instructions, The defaults usually work fine, but answer yes to the last question about prepending the install location to PATH: /home/user/.bashrc

8. To make use of Anaconda right away, source your bashrc by running the foloowing command:

        source ~/.bashrc
   
9. Install any other packages that you want:

        pip install tensorflow
        pip install keras
        pip install google-cloud-storage
        pip install google-cloud-bigquery
    
10. Setup the VM server by genarating Jupyter configuration file:

        jupyter notebook --generate-config
    
11. Add the following code in the config file using vi,nano or your favourite editor >> run: 

        vi ~/.jupyter/jupyter_notebook_config.py

        c = get_config()
        c.NotebookApp.ip = '*'
        c.NotebookApp.open_browser = False
        c.NotebookApp.port = <Port Number which you opened in Firewall settings>
    
12. To run the jupyter notebook, just type the following command in the ssh window you are in :

        jupyter-notebook --no-browser --port=<PORT-NUMBER>
    
13. You should be able to access jupyter notebook using your browser from following URL:

        http://<External Static IP Address>:<Port Number>
 
 
# 3. Creating a Cloud Storage Bucket for storing pre-processed and cleaned data.

1. GCP console >> Navigation Menu >> Storage >> Create Bucket >> https://prnt.sc/udw5ea

2. Give your Bucket name >> Select region >> Rest all you can leave default or select as per your preferences >> https://prnt.sc/udw6pd

# 4. Installing GCS Fuse for mounting your Cloud Storage Bucket to your VM instance

For latest release of Ubuntu and Debian follow these steps:
1. Add the gcsfuse distribution URL as a package source and import its public key:

        export GCSFUSE_REPO=gcsfuse-`lsb_release -c -s`
        echo "deb http://packages.cloud.google.com/apt $GCSFUSE_REPO main" | sudo tee /etc/apt/sources.list.d/gcsfuse.list
        curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -
        
2. Update the list of packages available and install gcsfuse.

        sudo apt-get update
        sudo apt-get install gcsfuse

3. Say you want to mount the GCS bucket called my-bucket. First create the directory into which you want to mount the gcsfuse bucket, then run gcsfuse:

        mkdir /path/to/mount/point
        gcsfuse my-bucket /path/to/mount/point
        
4. On Linux, for unmounting your bucket

        fusermount -u /path/to/mount/point
        
For more information on GCS Fuse read: https://cloud.google.com/storage/docs/gcs-fuse
        
        
# 5. Create an IAM service account for your python account to perform operations on Cloud Storage Bucket

Identity Access Management (IAM) service account is needed to grant your python program the permission to access and perform operations on GCP.

1. Navigation Menu >> IAM and Admin >> Service Accounts >> Create Service account by any name that you want 

2. Service Accounts >> Generate key >> https://prnt.sc/udwewn

3. The key will be downloaded on your PC and you can use that in your python code by following the documentaion here >> https://cloud.google.com/docs/authentication/production


# 6. Creating Database and Tables in BigQuery for storing processed data.

1. Navigation Menu >> BigQuery >> Add Data >> Pin a project >> Select your project >> https://prnt.sc/udwhts

2. Your project name will appear in bottom left corner >> Click on project name >> Create Dataset >> https://prnt.sc/udwiwv

3. Click on Dataset name >> Create Table Tables >> https://prnt.sc/udwjbh

4. You can add the table fields using +Add field option or you can Edit as Text and add your JSON schema >> https://prnt.sc/udwjva


# 7. Using Dataflow runner for Extract, Transform and Load into Google Bigquery.

1. Upload your User defined function Javascript to Cloud bucket which transforms the data.

2. Upload the JSOM schema files or your respective tables to Cloud bucket.

3. Navigation Menu >> DalaFlow >> Create Job from template >> We are using Text file on Cloud Storage to BigQuery template as per our requirement.

4. Fill or the necessary fields and appropriate paths to you input files and output location >> https://prnt.sc/udwo3q

5. Start the Dataflow runner job and wait till its completion (Time varies according to the dataset and trabsform operations)

6. If there is any error you will be able to see the logs on the Runner page itself >> https://prnt.sc/udwp96

7. If the job succeeds you will see all the Graph steps in Green and Job Status: Succeded >> https://prnt.sc/udwpll

8. To verify you can run some SQL queries on BigQuery interface and you will see the corresponding result>> https://prnt.sc/udwqzi


# 8. Visualization using Google DataStudio or ModeAnalytics.

1. On the BigQuery page itself click on Explore Data and it will take you to the Google DataStudio page >> https://prnt.sc/udwuh4

2. Make visualizations on your selected query >> https://prnt.sc/udwu65


# That's it! Your Analytics platform is ready to go!
# Thanks!




  
    
    
