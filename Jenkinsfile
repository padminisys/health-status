pipeline {
    agent {
        kubernetes {
          yamlFile 'KubernetesPod.yaml'
          idleMinutes 5
        }
    }
    stages {
        stage('Build Image & Push') {
          steps { container('kaniko') {
          sh '''
            /kaniko/executor --context `pwd` --dockerfile `pwd`/docker/development/Dockerfile --destination padminisys/health-status:dev
          '''
          }
        }
    }
        stage('Helm install') {
          steps { container('helm') {
          sh '''
            helm install health-status-app ./helm/chart
          '''
          }
        }
}
}
}
