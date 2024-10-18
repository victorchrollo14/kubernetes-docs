# Learning kubernetes

- Finish off lectures from 100xdevs part 1 to 5.
- complete the assignment on k8s.
- Kubernetes the hard way.
- use k8s on the current application at work.
- build the leetcode clone in a week and use k8s on that as well to deploy
  to prod on a k8s cluster.
- try different k8s services provided by aws, azure, gcp, digital ocean.

## tasks completed

- [x] learnt basic k8s jargons - clusters, nodes, pods, containers, control-plane
      , worker-node, deployments, replicaset, services, nodePort.
- [x] Ran all the above stuff locally using kind and kubectl.
- [x] Created a k8s cluster on digital ocean and made a deployment with 3 nginx pods,
      then created a service to expose the nginx pod on port 30005 and
      was able to hit the port via curl.

  ```bash
  # to get EXTERNAL-IP
  kubectl get nodes -owide

  curl http://EXTERNAL-IP:30005

  ```

- [x] create a loadbalancer service on digital ocean k8s cluster and accessed the nginx from the EXTERNAL-IP of the loadbalancer

## tasks to do

- [] lecture 3 - namespaces, ingress, ingress controller (nginx, traefik), configMaps, secrets.
- [] learn stuff from lecture 4
