def image = 'docker.io/padminisys/health-status:dev'

pipeline {
    agent {
        kubernetes {
          yamlFile 'KubernetesPod.yaml'
          idleMinutes 15
        }
    }
    stages {
        stage('Build Image & Docker Push') {
          steps { container('kaniko') {
          sh '''
            /kaniko/executor --context `pwd` --dockerfile `pwd`/docker/development/Dockerfile --image-name-with-digest-file `pwd`/helm/digest.txt --destination padminisys/health-status:dev
          '''
          }
        }
    }
        stage('Get Image Digest') {
          steps { container('helm') {
          script {
            image = readFile('./helm/digest.txt').trim()
          }
            echo "Image Digest: ${image}"
          }
        }
    }
        stage('Helm install') {
          steps { container('helm') {
          script {
            'helm upgrade --install health-status-app ./helm/chart --set image=${image}'
          }
        }}
    }
}
}
