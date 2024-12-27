# Learning kubernetes

- Finish off lectures from 100xdevs part 1 to 5.
- complete the assignment on k8s.
- deploy the quickmeet project on a k8s cluster (digital ocean)
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

- [x] create a loadbalancer service on digital ocean k8s cluster
      and accessed the nginx from the EXTERNAL-IP of the loadbalancer
- [x] lecture 3 - namespaces, ingress, ingress controller
      (nginx, traefik).
- [x] learned about ingress controller, created a nginx ingress loadbalancer and added different domain names for apache pods and nginx pods. apache.victorimmanuel.me points to apache and nginx.victorimmanuel.me point to nginx
- [x] lecture 4 (secrets, configMaps and volume mounts)
- [x] deploy the quickmeet application on k8s and added ssl certificate using cert-manager.

## tasks to do

- [] lecture 5 (more about volumes, horizontal pod autoscale)
- [] lecture 6 (HPA node autoscaling, resource management)
- [] build leetcode and deploy all the stuff using k8s

### Questions

1. Why use ingress when there we already have services like nodePort,
   loadbalancer etc to expose a pod to the external world?

- for each deployment we create, we need a seperate loadbalancer service,
  so if you had a frontend pod, backend pod,
  and maybe a worker pod that does some computationally heavy task,
  you would have to create 3 seperate loadbalancer's
- you have to add ssl certificates to all three loadbalancer
  and make sure you update them when required as well. seems ok for 3 loadbalancer,
  but there is also some cost associated with each load balancer,
  if you create more deployments then you'll have the overhead of managing
  too many loadblancers, plus the cost would be high etc
- we can't manage the rate limiting logic at a single place
