---
id: module_overview
title: Module Overview
---

## Account

Current existing functions found in the OpenSeed_Account file. Not all these functions are finalized and there will be changes while we work toward our first release. However, these should represent most of the major features.

* **check_appID(appID,devID)**:
Used to check the applications status on OpenSeed. If it returns true the application is free to use the service.

* **check_devID(name)**:
Used to access the developer account. Misnomer this checks if the user is also a developer. 

* **account_check(username,passphrase)**:
Checks user accounts returns true if correct.

example: using curl
```
curl --data "act=accountcheck&devid=<devID>&appid=<appid>&username=<username>&passphrase=<passphrase" https://api.openseed.solutions/account.py
```
* **create_user(username,passphrase,email)**: Creates Account based on the included criteria 

example: using curl

```
curl --data "act=create&devid=<devID>&appid=<appid>&username=<username>&passphrase=<passphrase>&email=<email>" https://api.openseed.solutions/account.py
```

* **create_developer(devName,contactName,contactEmail,steem)**:
Creates Developer account

* **create_app(devID,appName)**:
Creates Application and associates it with the developer. 

* **create_profile(theid,data1,data2,data3,data4,data5,thetype)**:
Creates the long form profile for users,developers, and applications. Called after the ids have been created.

* **add_history(userid,apppubId,data)** :
Adds to the history record for the user

* **get_history(userid,apppubId,count)** :
Returns the history for a specific account. Optionally you may define a specific application and a total count.

## Chat

OpenSeed-chat is a lowest common denominator encrypted chat service for individuals and groups using the OpenSeed hierarchical security setup.  

### Current implementation:

The chat module was designed with applications and games in mind where in these systems would control the flow of the chat based on the needs of the application and using the applications built in timing. Thus a application dependent on chat may query the server every second where an app that is less dependent may decrease the update requests for bandwidth or other issues. 

* P2P chat: The standard chat model within OpenSeed. Users have consented to the connection an have shared (via OpenSeed) the encryption key. No users can be added to this chat and will continue to be valid as long as the users of the chat retain the key. 

* Group chat: Group chats come in two modes, an open mode where any user can join the chat as long as they are authenticated, and private groups whose list is controlled by the creator of the group. 

### Using OpenSeed-chat:

This module requires an active developer, application, and valid user account on OpenSeed to complete the transaction. 

A chat session works in this order.

1. User initiates a chat with another user via request. If the request has be accepted the two are now able to chat.

2. The User is now "linked" with the other User and can starts chats with them at any time. If a chat room has not been created for them a new room is created with a new encryption key.

3. The users can now chat using this key.

If one of the users removes their consent from the chat the link is broken and chatting between the users isn't allowed until the link is re-established.

NOTE: We will assume you have your accounts in order for the next section. 

Almost all (soon to be all) functions in OpenSeed will return a json formatted response to a json formatted request.
 
Example:
```
{"act":"get_chat","appID":"'+str(OpenSeed.appId)+'","devID":"'+str(OpenSeed.devId)+'","uid":"'+uid+'","username2":"'+username2+'","room":"'+username+','+username2+'","last":"'+str(last)+'"}<br>
```

Will return:

```
{"index":number,"message":encrypted data,"date":date,"type":type}
```

*The above is from the Godot library but the Qt version is very similar. The webapp version will need to be changed slightly due to security concerns.*

For ease-of-use the OpenSeed library shortens these calls to a simpler uniform function that spans the library regardless to the toolkit.

The functions are a follows with a brief explanation of their task (if it isn't obvious)

* **check_chat(uid,username2)** :
Checks for the existence and status of a chat room. These range from 0 - 3 with 0 meaning there is no chat room to 3 meaning the room is closed.

* **start_chat(uid, username2)** :
Initializes a chat between two users, using the uid of the first user to verify that the chat is indeed created by the owner of the account. This function creates the encryption key on the server for the users to share. 

* **register_chat(uid,username2)** :
If the chatroom is created you must register to receive the key.

*Note: The above commands would best work in conjunction with each other where in you would check, then either register or start the chat depending on the response. It is kept separate for the rare cases when they might be useful as single functions.*

* **send_chat(uid,username1, username2, message)** :
Sends chat message to the appointed chatroom. The message is encrypted before sending the message and stored as a binary blob.

* **get_chat(uid,username2)** : Gets chat for the selected users.

## Game

OpenSeed-Games similar to OpenSeed-Music is a set of functions that enables Game developers to use OpenSeed for cloud services. These services are some of the older features of OpenSeed and as such haven't been re-written yet.

* **get_leaderboard(app_pub_id)**:
Gets the leaderboard for the given game. Returns json parse-able data.

* **update_leaderboard(app_pub_id,userid,data)**:
Updates leaderboard database file on OpenSeed.

* **find_match(app_pub_id,userid,data)**:
Used to find network matches for games that support them. The data variable would be used for per-app data that can be used in the match making algorithm. A standard may be needed for this data but we are still working out what developers will need.

* **join_match(app_pub_id,userid,matchid)**:
Sets up the connection to the games multiplayer match. OpenSeed will have multiplayer servers to facilitate matched based games.

* **save_game(app_pub_id,userid,data)**:
Similar to the update_leaderboard function this will allow developers to offer synced game saves across platforms and devices. 

* **game_sync(app_pub_id,userid,content)**:
Gets the requested content from OpenSeed, this includes saved games, custom levels, and in-game purchases.

## IPFS

This will be where all ipfs related functions will go.

## Music

The OpenSeed Music modules is used to find, and download music stored on the Steem blockchain as well as ipfs. The available functions are only a small portion of the desired functionality but there is enough to create an embedded music player, or other media centric applications. 

As a part of the service the original files which can be any number of formats, are re-encoded into a high quality Ogg Vorbis file for use in most game engines. 

The music module returns a json formated text string containing: original file, account name, Song Title, Steem Post, Track Image, Curated play list, Date, Ogg file, Type, Genre,Tags,Duration 

* **get_artist_tracks(artist)**:
List all tracks available based on artist account. 

* **get_new_artists(number)**:
New artists based on date and number. Currently this feature returns any artist that has a new track, not necessarily "New artists". However, unlike the function below the artist is only counted once regardless to how many tracks they may have uploaded between calls. 

* **get_new_tracks(number)**:
New tracks lists any new tracks found on OpenSeed based on date and the number requested. 

* **get_genres()**:
Returns a list of genres available based on the genre tags in the database.

* **get_genre_tracks(genre)**:
Returns all tracks in the system based on genre. In the future this function may include a "Level" option that dictates how granular the genres are listed.

## SeedGenerator

This module is still under work and this document should be considered a living document that will change as the design changes.

The SeedGenerator is used for the creation, distribution, and validation of cryptographic keys used on OpenSeed.
At the present we use the same key generating algorithm for all keys with small changes in each. 

Functions:

* **generate_userid(name,passphrase,email)** : 
Used to create a uid for the users. This takes the place of the password and should be stored locally whenever possible.

* **generate_id(name,account,contactname,contactemail)** :
Used for creating develop IDs and app IDs. This ID is considered "Private" and is used to encrypt / decrypt data that is meant to remain secure.

* **generate_publicid(id)**:
Used to identify the developer and application to OpenSeed to know which encryption key to use.

* **generate_token(devpub,apppub,baseID,total,data)**:
Used to create our nft implementation within OpenSeed and Steem.

* **store_onetime(thetype,register,validusers)**:
[Needs to be renamed] Used to create and store onetime codes for chat and other secure communications. This should be used for things that are of the most secure nature. Money transfers, and the like.

* **update_key(thetype,register,validusers)**:
This updates the keys of an already existing account. Useful if there are issues with security.

## Steem

The Steem get functions are designed to retrieve or "get" data from steem. Below are the current functions available. *Note: steem functions are mixed into other files so one of the current tasks is consolidating all functions into logical groupings*

* **get_post(author,permlink)** :
Gets post info

* **get_account(account)** :
get account utilizes the steem_python get_account but only returns the profile information of the account. This is useful when you don't need EVERYTHING connected to the account.

* **get_full_account(account)** :
Same as above, except it returns all info on the account.

* **get_connections(account)** :
Get connections is a combination of both get_followers and get_following which combines their output into a list that only contains those the user is both following and being followed by the other.

## Token

General Token implementation in OpenSeed.

## Utils

**UtilsFunctions that are designed to help developers but don't fit in other libraries.**

The image functions are best used when speed is of the essence. With the lower resolutions being much more portable and palatable when only snapshots will do. 

* **image_store(url)**: 
Image store takes the original file and creates three versions of the file.

- Low-res(1024x)
- Mid-res(2048x)
- High-res(4096x)

These files will be stored on the server and can be accessed by others using the image_get function. 

* **image_get(url,size)**:
Returns the url of the image in question. Adding the size of the image will dictate what version will be sent.