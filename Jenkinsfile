pipeline {
    agent {
        kubernetes {
          yamlFile 'KubernetesPod.yaml'
          idleMinutes 5
          hostNetwork true
        }
    }
    stages {
        stage('Exec Kaniko') {
          steps { container('kaniko') {
          sh '''
            /kaniko/executor --context `pwd` --dockerfile `pwd`/docker/development/Dockerfile --destination padminisys/health-status:dev
          '''
          }
        }
    }
}
}
