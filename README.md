# Arris Password of the Day Generator

-----------------------------------

**PLEASE READ THIS!**

1 - In the past few years, some internet service providers have been changing their modem configurations in ways that prevent this tool from working. If it doesn't work with your modem and your modem is in the supported modems list, I'm afraid there's nothing I can do about it. Rating the app 1 star, complaining and being offensive is stupid and pointless.

2 - I am not Spanish or from Latin America. Please don't assume I can speak Spanish or that I have to reply to you in Spanish.

3 - A lot of people fail to read the instructions and then write 1-star reviews saying this app is "a piece of crap", "horrible", and even "disgusting" (how does that even apply to a mobile phone app?). This is a tool that I built in my spare time, with my resources, and am giving away for free. If you want full service or insult those who try to help others for free, go pay someone to listen to you.

-----------------------------------

[![NPM](https://nodei.co/npm/arrispwgen.png)](https://nodei.co/npm/arrispwgen/)

[![NPM Version](https://img.shields.io/npm/v/arrispwgen.svg?style=flat)](https://npmjs.org/package/arrispwgen)
[![License](http://img.shields.io/npm/l/arrispwgen.svg?style=flat)](LICENSE)
[![Build Status](https://travis-ci.org/borfast/arrispwgen.svg?branch=master)](https://travis-ci.org/borfast/arrispwgen)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/borfast/arrispwgen/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/borfast/arrispwgen/?branch=master)

Do you need an Arris modem password? Are you stuck with your Arris modem, in a message that says "in order to access advanced features you must enter the password of the day"? Then you came to the right place!

## Description

This is a an Arris password of the day generator for various Arris cable modems.

I created this because a cable modem died on me and my ISP, Cabovisão (now called Nowo - if you're in Portugal, I highly recommend them), brought me a new one: an Arris TM602A.

As usual when I get a new technological gadget, I had to explore it. The web interface, accessible via [http://192.168.100.1](http://192.168.100.1), was quite simpler than my previous modem, the [Scientific Atlanta Webstar 2203c](https://www.borfast.com/blog/2007/11/06/scientific-atlanta-webstar-2203c---how-to-access-locked-pages/) but it also had a password protected page.

That obviously piqued my interest and I had to try to get in.

A bit of googling provided the answers I needed: apparently this device had a different password every day and I found a [couple](http://www.turkeyforum.com/satforum/showthread.php?t=557567) of [pages](http://forum.donanimhaber.com/m_36352536/tm.htm) with a list of passwords of the day, as well as a ~~[page with a password generator](http://www.taringa.net/posts/downloads/3918409/ARRISpwod-Modem-Arris-Tm501a.html)~~ (no longer available) for the TM501A model which seemed to work fine for the TM602A.

That gave me access to the protected page but I didn't want to be dependent on those two pages every time I wanted to access my modem's protected page. Besides, I didn't know how long the pages would last (they're both forum posts). The password generator was no solution either, because it's written for .NET, Mono isn't able to execute it properly and I'm obviously not going to install Windows just because of this.

So I brought the matter into my own hands and I wrote my own [arris password of the day generator](http://www.borfast.com/projects/arris-password-of-the-day-generator).

## How to use

#### Online

You can use the [online generator](http://www.borfast.com/projects/arris-tm602a-password-of-the-day-generator/generator) to generate one or more passwords.

#### Android app

You can use my [Android application](https://play.google.com/store/apps/details?id=com.grounduphq.arrispwgen). It's also [open source](https://github.com/borfast/arrispwgen-android). Pull requests are welcome!

#### Bookmarklet

Create a bookmark that uses the following code as the URL and whenever you click it, you'll get the password for the current day:
`javascript:(function(){var fragment=document.createDocumentFragment();var script=document.createElement('script');script.type='text/javascript';script.src='https://www.borfast.com/arrispwgen/arrispwgen.js';var head=document.getElementsByTagName('head')[0];var done=false;script.onload=script.onreadystatechange=function() {if( !done && ( !this.readyState || this.readyState==='loaded' || this.readyState==='complete') ) {done=true;var today=(new Date()).getTime();window.prompt('Arris modem password for today is shown below. Use Ctrl+C to copy, Enter or Esc to dismiss.', GenArrisPasswords(today)[today]);}};fragment.appendChild(script);head.appendChild(fragment);})();`

#### Node.js

Install the arrispwgen package with npm:

`npm install -g arrispwgen`

If you want the password for the current day, just call `arrispwgen` with no arguments:

``` bash
$ arrispwgen

DATE                      | PASSWORD
Friday, December 9th 2016 | 64Y3MV3L7G
```

To get the password for a given day, pass `arrispwgen` the date for which you want the password. For example:

``` bash
$ arrispwgen 2016-12-08

DATE                        | PASSWORD
Thursday, December 8th 2016 | 1R3IG4R4RH
```

In case you need to use a custom seed you can pass the `--seed` or `-s` argument:

``` bash
$ arrispwgen 2016-12-08 --seed ABCDEFGHIJ

DATE                        | PASSWORD
Thursday, December 8th 2016 | 9KEWMO5JKE
```

You can also get the passwords for a range of days by passing a start date and an end date:

``` bash
$ arrispwgen 2016-12-08 2016-12-13

DATE                         | PASSWORD
Thursday, December 8th 2016  | 1R3IG4R4RH
Friday, December 9th 2016    | 64Y3MV3L7G
Saturday, December 10th 2016 | KMAR88TPKY
Sunday, December 11th 2016   | ZOU3M83Z9E
Monday, December 12th 2016   | WIVIK4INFD
Tuesday, December 13th 2016  | G6TBPWYH6J
```


## Tested modems

This is a list of known modems for which this password generator generates valid passwords.
If you know other models that work, please let me know in the comments below.

* Arris CM820A
* Arris DG860
* Arris DG950A
* Arris TM501A
* Arris TM502B
* Arris TM602A
* Arris TM602B
* Arris TM722G
* Arris TM802G
* Arris TM822G
* Arris TG862
* Arris TG862A
* Arris WBM760A


## Troubleshooting

If the generated passwords are not working for your modem there are a few things you can try.

#### 1. Check the date

The first and simplest is to check the date on your modem. If it the day on the modem's date and the date for which you are generating a password don't match, the password will not work.

#### 2. Try a default password

The second simplest thing is only an option if your modem asks for a username
and a password. You can try the
[known default passwords for Arris modems](https://portforward.com/router-password/arris.htm).
Some users on other sites report that they can get in using "technician" as the
username and either the default password or a generated password. You can also
try using `T!m3W4rn3rC4bl3` as the password along with the username
`technician` (this probably only works if your ISP is Time Warner, though).

#### 3. Try making your modem use the default seed

Some modems might be tricked into using the default seed for their password generator if you disconnect the coaxial cable and reboot your modem. The theory is that the modem gets its settings from the ISP via TFTP (don't worry if you don't know what that is) and by disconnecting the cable you're effectively preventing the modem from reaching the ISP to get the settings, thus defaulting to the known seed.

If the generated passwords don't work, it might be because your modem also didn't get the date and thinks it's January 1, 1970. The password for that date using the default seed is `XCA2Y12U71`. Give that one a try.

One detail about this technique is that since your modem will be disconnected from the internet, you might not be able to do much with it. You can try logging in (assuming it works) and then reconnect the coaxial cable but that might force you to reauthenticate with the proper password for which you don't know the seed.

#### 4. Go into hacker mode :)

The last option is the tricky one, and involves a lot of fiddling with a command line and some more advanced tools. If that scares you, read on, it's not all over.

If none of the above options worked, or if your modem just asks for a password of the day without any username, chances are your ISP changed the password generator seed in your modem.

Some time ago I found an exploit that works for getting the admin interface password from the modem and it might also work for getting the seed. It allows you to dump the contents of your modem's NVRAM, where hopefully you can find the seed.

If you want to try it, you'll need to have Ruby installed as well as the Ruby `highline` package and then follow these steps:

1. Download a memory dump from your router, accessible at `http://192.168.0.1/router.data`. Your modem's IP address may be different, adjust accordingly. If you get a "404 Not Found" error, you can try logging into your router as the regular admin user ([known passwords are available here](http://setuprouter.com/router/arris/passwords.htm)), going to the backups section and get the file from there. If that still doesn't work, then I'm afraid this guide won't be of any further help.

2. Decompress the backup file. If using a *nix operating system like macOS or Linux you can do it with the following command: `tar vxf router.data`. If you use Windows you can probably use something like Winzip or Winrar.

3. If the previous step doesn't result in any error, skip this one. If decompressing the file doesn't work, it might be because some more recent modems encrypt the backup file. Fortunately the credentials are known, since they are written in plain text in one of the router files, and thus we can decrypt the backup file. Decrypt `router.data` by using the following command: `openssl enc -d -aes-256-cbc -in router.data -out backup.tar -pass pass:Sercomm` and then decompress the resulting backup.tar file with the following command: `tar vxf backup.tar`

4. Download the Ruby [exploit code](http://www.exploit-db.com/exploits/29131/).

5. Run the Ruby script with the following command:
`sudo ruby sc_mix.rb -u -s backup/sc_nvram.usr.sc -d sc_nvram_dump`

6. The resulting "sc_nvram_dump" file contains a ton of modem configuration data but you only get it in hexadecimal format, which at first is a bit discouraging but if you load it into an hexadecimal editor, you'll see the configuration settings, which are separated by dots. For example, in a couple of models that have a fixed (i.e. not changing every day) administration password, the password value in the resulting dump is next to "sysAdminPassword[0]". At the time of this writing I haven't yet been able to test this on a dump of a modem that uses a password of the day mechanism, only fixed passwords, so I haven't yet been able to confirm whether the seed is also present in that dump.

This should work on Linux and Mac but I'm not sure about Windows. You will need to drop the "sudo" in the beginning if you're on Windows but I'm not sure about the rest.

For the sake of honesty, I should mention that this file will likely contain your modem's admin password, as I mentioned above. I don't intend to hack anyone's modem, nor would I be able to, not only because I don't know the IP address but also because if it is configured properly, I shouldn't even be able to access its administration interface from the internet, but I think I should be honest about it.

### Extra information

If you want to dig a little deeper into this subject, here are a few interesting things to check out:

* [ARRIS Cable Modem has a Backdoor in the Backdoor](https://w00tsec.blogspot.pt/2015/11/arris-cable-modem-has-backdoor-in.html)
* [Arris Cable Modem Backdoor - I'm a technician, trust me.](https://console-cowboys.blogspot.pt/2014/09/arris-cable-modem-backdoor-im.html)
* [HOPE Number Nine (2012): The ARRIStocrats: Cable Modem Lulz](https://www.youtube.com/watch?v=jGUyOYgYoQQ)


## Ports to other languages

* Marcel Valdez Orozco ported the generator to C# (usable in LINQPad) and posted the code in a [gist](https://gist.github.com/3837628).
* Daniel J. H. created a [C++11 version](https://github.com/daniel-j-h/TM602X) for the command line.
* Daniel Sales created [Perl](https://www.borfast.com/arrispwgen/arrispwgen.pl) and [Java](https://www.borfast.com/arrispwgen/ArrisPwdGen.java) versions.
* There's an old [Android version](https://github.com/hcgonzalezpr/arrispod) created by Harry Gonzalez but it lacks the possibility to use a custom seed.


Thanks guys! :)

If you have your own port to another language, let me know and I'll add it here.

## Disclaimer

Please note that I did this mostly for fun and not for profit of any kind, nor does this open up anything private or dangerous to the world. Unlike with the [Scientific Atlanta Webstar 2203c](http://www.borfast.com/blog/scientific-atlanta-webstar-2203c-how-access-locked-pages), which allowed a little bit of fiddling with the modem's configuration, the Arris TM602A does not allow any modifications to the configuration at all - all it allows is to enable or disable a couple of logs, and run some diagnostic tests. In other words, this tool does not provide access to any secret information or allow you to do any malicious actions by itself. You do need to be aware if you are breaking any laws or contracts if you use it, though.
