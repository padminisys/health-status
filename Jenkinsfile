pipeline {
    agent {
        kubernetes {
          yamlFile 'KubernetesPod.yaml'
          idleMinutes 15
        }
    }
    stages {
        stage('Build Image & Push') {
          steps { container('kaniko') {
          sh '''
            /kaniko/executor --context `pwd` --dockerfile `pwd`/docker/development/Dockerfile --image-name-with-digest-file `pwd`/helm/digest.txt --destination padminisys/health-status:dev
          '''
          }
        }
    }
        stage('Update Digest') {
          steps { container('helm') {
          sh '''
            cat ./helm/digest.txt
          '''
          }
        }
}
        stage('Helm install') {
          steps { container('helm') {
          sh '''
            helm upgrade --install health-status-app ./helm/chart
          '''
          }
        }
}
}
}
