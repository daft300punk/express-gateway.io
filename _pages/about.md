---
layout: page
title: About
permalink: /about/
---

<section class="page-section-normal">
<div class="wrapper-flex">
<div class="wrapper">
<div class="flex-column" markdown="1">
## Introduction

Developing monolithic applications doesn't work. Monolithic applications are being broken down into microservices. These microservices expose the application as set of APIs that can be consumed by anyone.

Microservices and APIs is an architectural style that’s grabbing a lot of attention due an emphasis on sustainable development.

> At the heart of the microservices architecture is the API Gateway.

Express Gateway is a microservices API Gateway built on Express.js.

For a deeper look at microservices and the role of the API Gateway check out [Martin Fowler’s breakdown](https://martinfowler.com/articles/serverless.html) in and the [API gateway pattern](http://microservices.io/patterns/apigateway.html) described on Chris Richardson's site.
</div>
</div>
</div>
</section>
<div class="svg-fix">{% include wave-1.svg %}</div>
<section class="page-section-blue">
<div class="wrapper-flex">
<div class="wrapper">
<div class="flex-column" markdown="1">

## Why Express Gateway?

If you’ve used Node.js, you’ve almost certainly come across Express.js.  Express.js (Express) remains one of the largest, most widely adopted, open source project in the world. Express is maintained by seasoned industry veterans. Bugs get fixed, issues get addressed and as more developers discover Express, we believe it could present a competitive asset in the future.

> Express’ greatest strengths are its simplicity and flexibility

Simplicity means that, as a minimalist, general purpose, framework that is familiar to every Node developer out there you can get started rapidly and continue that velocity throughout the API Development Lifecycle.

There's really nothing _new_ about an API Gateway built on top of Express.  In fact, one of the key reasons why Express Gateway was built was because we heard countless times of folks rolling their own API Gateway to deal with the inflexible and opaque solutions out there. All we did was codify and package it for the community.

We believe that an Express based API Gateway will be a powerful enabler for developers to sustainably build better, faster and more scalable applications.
</div>
</div>
</div>
<div class="svg-fix">{% include wave-2.svg %}</div>
</section>

<section class="page-section-white">
<div class="wrapper-flex">
<div class="wrapper">
<div class="flex-column" markdown="1">
## What exactly *is* Express Gateway?

Express Gateway is a bunch of components which declaratively build around Express to meet the API Gateway use case. The Express Gateway harnesses the simplicity and the rich technology ecosystem around Express middleware.

*Let’s take a closer look underneath the hood...*

</div>
</div>
</div>

<div class="wrapper border-top-blue flex-row flex-center whatiseg with-graphics with-graphics" markdown="1">
<img src="{{ site.baseurl }}/assets/img/Marchitecture_Express-As-We-Know-it_01.png" />
<div class="flex-column" markdown="1">
### Express as we know it, today

Within Express is its Router. The Router matches URLs and routes them to modules known as “middleware”.  Each middleware acts on a request coming into Express through the router and passes it onto the next piece of middleware as a chain.  This request, response and “next” flow is the foundation of how Express works and its simplicity is why its so popular.
</div>
</div>
<div class="wrapper border-top-blue flex-row flex-row-reverse with-graphics" markdown="1">

<img src="{{ site.baseurl }}/assets/img/Marchitecture_ExpressGatewayCore_01.png" />
<div class="wrapper" markdown="1">

### Express Gateway Core
Express Gateway transforms Express into a dynamic runtime engine.  For example - you can easily hardcode routes statically through Express’ API. In Express Gateway, however, those values can continually change and are dynamically injected as parameters without having to alter the underlying code.

Essentially, all of the core components within Express Gateway make Express more dynamic and declarative.
</div>
</div>
<div class="wrapper border-top-blue" markdown="1">
### Core Components

<div class="wrapper-flex">
<div class="wrapper">
<div class="flex-column shape-style" markdown="1">
1. <span class="li-main">Centralized Declarative Config (YAML/JSON):</span>
  - Express Gateway centralizes all of the app configuration for the API use case into one YAML(or JSON) file.  Within the YAML file is an easy to understand and straightforward description of how and what is configured. Express Gateway utilizes this config to run Express as an API Gateway dynamically.   

2. <span class="li-main">Consumer Management Module:</span>
  - Express Gateway comes with a component that registers consumers (users and apps) of APIs hosted by Express Gateway. This component is a highly extensible identity and authorization system out of the box for APIs. It can also be easily integrated with existing IAM service providers and systems of record. Consumers may have multiple credentials types and new credential types can be easily added to the system (e.g. SAML, Kerberos).

3. <span class="li-main">Persistent Data Store:</span>
  - Express Gateway stores application data centrally in a traditional or distributed data store. This component allows the data to be accessed globally and, in turn, developers can build to scale with multiple instances of Express Gateway. The data store can also be used to centralize app configuration across a cluster of Express Gateways.

4. <span class="li-main">Plugin System:</span>
  - Express Gateway entities, like policies, pipelines, conditions, and actions, wrap around Express middleware to make it dynamic.  These entities are bundled as an extension also known as a plugin. Any Express middleware can now be plugged into Express Gateway to take advantage of its dynamic capabilities.
</div>
</div>
</div>
</div>
</section>

<div class="svg-fix">{% include wave-1.svg %}</div>
<section class="page-section-blue">
<div class="wrapper">
<div class="flex-column infographics" markdown="1">

#### How does Express Gateway work?
Now that we’ve described what’s in Express Gateway and how it relates to Express, let’s go over how it works:
<div class="wrapper flex-row with-graphics" markdown="1">
![Core Injection]({{ site.baseurl }}/assets/img/Marchitecture_CoreInjection_01.png "Core Injection")
1. Express Gateway YAML is read.
2. Config parameters initialize Express and its middleware.
3. A request comes in through an API endpoint and is received by the Router.
4. The Router connects the API endpoint to a pipeline.
5. Within each pipeline is a set of policies.
</div>
<div class="wrapper flex-row with-graphics" markdown="1">

![Policies]({{ site.baseurl }}/assets/img/Marchitecture_v6a.png "Policies")

1. Each policy has a set of conditions dynamically injected from the Centralized Config.
2. If the set of conditions are met, a new process begins. An action is taken by the Express middleware at the heart of the Express Gateway policy. The request is passed onto the next policy within the pipeline and the process repeats for every policy within the pipeline.
</div>
<div class="wrapper flex-row with-graphics" markdown="1">

![Pipelines]({{ site.baseurl }}/assets/img/Marchitecture_v6b_pipelines.png "Pipelines")

1. After all of the policies in the pipeline are passed, the request is proxied to an underlying microservice which applies the business logic and sends out the response to the API consumer
2. Policies can act on that response before it's forwarded to the API consumer.
</div>
</div>
</div>
<div class="svg-fix">{% include wave-bottom-2.svg %}</div>

</section>