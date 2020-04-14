---
id: introduction
title: Introduction
---

## What is OpenSeed?
*Note: All these documents are considered rough drafts and will change often.*

Our mission is to make open-source software development economically competitive with private solutions by providing developers with turnkey backend solutions that make it easier than ever to bootstrap games and applications that utilize digital assets to engage users and generate revenue.

To that end, we will create a reusable, federated, open-source tool that enables developers to easily integrate state-of-the-art decentralized database technologies into their existing stack, without having to suffer from scalability, useability, and cost constraints by "hybridizing" these databases with mature and scaleable database technologies.

OpenSeed is essentially a collection of scripts and utilities that enable developers to build their applications faster and at lower cost when compared to closed source or system exclusive tools. OpenSeed achieves this by integrating its services with the Steem blockchain which is a stable, fast, and cost effective means of ensuring data integrity while simultaneously providing a robust backbone for data synchronization and long term data storage.

"The blockchain" was not designed for real-time operations or for ephemeral communications, which has left many blockchain-powered applications lacking in basic functionalities like easy account creation and messaging. That's why OpenSeed will have its own network of servers which are optimized for serving functions like these and interfacing with decentralized databases like Steem.

OpenSeed is being developed on two fronts.

1. A web app capable set of tools to easily integrate OpenSeed into any existing or new application that wants a standardized set of tools that OpenSeed provides. (JavaScript)

2. A singleton that can be added to any game created by the Godot Game engine that offers the same benefits as the web app version.

## Module Architecture

OpenSeed is broken up into module from the generic (put data, get data) to the specific Chat, Music, Images. Each with the idea of having public,private,and semi private functions to best serve the user.

- **Public**
This data is stored on a publicly accessible database or blockchain. Any application can access and read this data but only the originator can edit it. This would be useful for long form data that doesn't contain sensitive information, but needs to be stored in a long term way.

- **Private**
This data is stored and encrypted using 3 separate encryption keys based on developer,app,and user. This data can be set to synchronize between servers or stored on a single server for extra security. (This would be useful for sensitive information like admin accounts, key storage)

- **Semi-Private**
This data is encrypted using only the users encryption key and by default synchronized between servers. This would be used for user logins and other data that needs to be known throughout the network but doesn't need to be public.

Of course there are functions and services that break this mold a bit. The Chat interface would have the ability to be Public or Private based not on whether others can read the chat (they cant) but that it would follow the login from app to app (Public) or be locked to a single app (Private). Similarly, Data files such as Music and Images are considered Public and synchronized by default however; Images can be set private if they are connected to a chat room or designated by the app as needing to be private.

Each module returns data in a json formatted reply and sent to the server the same way. Regardless to whether this data is Private,Public, or Semi-Private the data is sent using encapsulated encryption and decrypted on the server for storage (or not as the case may be).