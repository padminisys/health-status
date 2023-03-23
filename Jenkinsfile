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
        stage('Helm Deploy') {
          steps { container('helm') {
          sh '''
            helm ls
          '''
          }
        }
}
}
}
