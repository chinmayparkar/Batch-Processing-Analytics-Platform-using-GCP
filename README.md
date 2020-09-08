# Batch-Processing-Analytics-Platform-using-GCP

# Pre-Requisites
1. Google Cloud Platform account >> https://cloud.google.com/gcp/
2. Select any data (preferably > 1 GB) from Kaggle or any other Data repositories >> https://www.kaggle.com/datasets

# Process Overview
1. Creating a Compute Engine VM instance on GCP Cloud Console
2. Installing Jupyter Notebook for Data processing
3. Creating a Cloud Storage Bucket for storing pre-processed and cleaned data.
4. Create an IAM service account for your python account to perform operations on Cloud Storage Bucket
5. Creating Database and Tables in BigQuery for storing processed data.
6. Using Dataflow runner for Extract, Transform and Load into Google Bigquery.
7. Visualization using Google DataStudio or ModeAnalytics.

# Let's Begin!

# 1. Creating a Compute Engine VM instance on GCP Cloud Console

>> Login to your GCP Cloud console >> Create a project and name it as per your choice >> https://prnt.sc/udvlf2
>> From the Navigation menu go to >> Compute Engine >> VM instances >> Create a new VM instance.
>> Give any instance name >> Select the Region >> Select atleast 4 core CPU and 16 GB memory for faster computations on Data. >> https://prnt.sc/udvi39
>> Select the Disk space and Operating system as per your requirement>> Allow HTTP/HTTPS traffic and Create instance >>  https://prnt.sc/udviw8
>> You will see your VM instance up and running >> https://prnt.sc/udvkg4


# 2 Installing Jupyter Notebook for Data processing

>> Opening port for Jupyter Notebook >> Navigation Menu >> VPC Network >> Firewall >> Create Firewall
>> Select any name and use these settings >> https://prnt.sc/udw0je >> I have selected port 5000 but you can use any other available port.
>> Login to your VM instance vis SSH >> https://prnt.sc/udvmge
>> Authorize gcloud and other SDK tools to access Google Cloud Platform using your user account credentials >> In your SSH terminal, run : gcloud init >> Follow the simple steps and use your authorized gmail account.
>> Select your project that you created >> In your SSH terminal, run : gcloud config set project <project-name>
>> Run these next commands for downloading and installing Jupyter Notebook and other packages:
  
    wget http://repo.continuum.io/archive/Anaconda3-4.0.0-Linux-x86_64.sh
    bash Anaconda3-4.0.0-Linux-x86_64.sh
  
>> Follow the on-screen instructions, The defaults usually work fine, but answer yes to the last question about prepending the install location to PATH: /home/user/.bashrc
>> To make use of Anaconda right away, source your bashrc by running the foloowing command:

    source ~/.bashrc
   
>> Install any other packages that you want:

    pip install tensorflow
    pip install keras
    
>> Setup the VM server by genarating Jupyter configuration file:

    jupyter notebook --generate-config
    
>> Add the following code in the config file using vi,nano or your favourite editor >> run: vi ~/.jupyter/jupyter_notebook_config.py

    c = get_config()
    c.NotebookApp.ip = '*'
    c.NotebookApp.open_browser = False
    c.NotebookApp.port = <Port Number which you opened in Firewall settings>
    
>> To run the jupyter notebook, just type the following command in the ssh window you are in :

    jupyter-notebook --no-browser --port=<PORT-NUMBER>
    
>> You should be able to access jupyter notebook using your browser from following URL:

    http://<External Static IP Address>:<Port Number>
 
 
# 3 Creating a Cloud Storage Bucket for storing pre-processed and cleaned data.

>> GCP console >> Navigation Menu >> Storage >> Create Bucket >> https://prnt.sc/udw5ea
>> Give your Bucket name >> Select region >> Rest all you can leave default or select as per your preferences >> https://prnt.sc/udw6pd


# 4 Create an IAM service account for your python account to perform operations on Cloud Storage Bucket

Identity Access Management (IAM) service account is needed to grant your python program the permission to access and perform operations on GCP.

>> Navigation Menu >> IAM and Admin >> Service Accounts >> Create Service account by any name that you want 
>> Service Accounts >> Generate key >> https://prnt.sc/udwewn
>> The key will be downloaded on your PC and you can use that in your python code by following the documentaion here >> https://cloud.google.com/docs/authentication/production


# 5 Creating Database and Tables in BigQuery for storing processed data.

>> Navigation Menu >> BigQuery >> Add Data >> Pin a project >> Select your project >> https://prnt.sc/udwhts
>> Your project name will appear in bottom left corner >> Click on project name >> Create Dataset >> https://prnt.sc/udwiwv
>> Click on Dataset name >> Create Table Tables >> https://prnt.sc/udwjbh
>> You can add the table fields using +Add field option or you can Edit as Text and add your JSON schema >> https://prnt.sc/udwjva

# 6 Using Dataflow runner for Extract, Transform and Load into Google Bigquery.

>> Upload your User defined function Javascript to Cloud bucket which transforms the data.
>> Upload the JSOM schema files or your respective tables to Cloud bucket.
>> Navigation Menu >> DalaFlow >> Create Job from template >> We are using Text file on Cloud Storage to BigQuery template as per our requirement.
>> Fill or the necessary fields and appropriate paths to you input files and output location >> https://prnt.sc/udwo3q
>> Start the Dataflow runner job and wait till its completion (Time varies according to the dataset and trabsform operations)
>> If there is any error you will be able to see the logs on the Runner page itself >> https://prnt.sc/udwp96
>> If the job succeeds you will see all the Graph steps in Green and Job Status: Succeded >> https://prnt.sc/udwpll
>> To verify you can run some SQL queries on BigQuery interface and you will see the corresponding result>> https://prnt.sc/udwqzi

# 7 Visualization using Google DataStudio or ModeAnalytics.

>> On the BigQuery page itself click on Explore Data and it will take you to the Google DataStudio page >> https://prnt.sc/udwuh4
>> Make visualizations on your selected query >> https://prnt.sc/udwu65

That's it! Your Analytics platform is ready to go!
Thanks!




  
    
    
