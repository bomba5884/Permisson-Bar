Permisson Bar
=============

Permission Bar is a free & simple solution to the EU cookie law.


## Why use Permission Bar?

Recent legislation requires websites to obtain explicit consent before leaving behind or reading files (mostly cookies) on user's computers. Website creators need to make the use of cookies on their websites very obvious to users.

Permission Bar does just that, presenting users with clear information on whether cookies are present, and advising users on how to adjust browser settings and what cookies mean for them.


## Important Legal Reading

1. Information Commissioner's Office - [Guidance on the rules on use of cookies and similar technologies (PDF)](http://www.ico.gov.uk/news/latest_news/2011/~/media/documents/library/Privacy_and_electronic/Practical_application/guidance_on_the_new_cookies_regulations.ashx)


## How it works?
 
Permisson Bar uses jQuery for its animations and events. It checks if 'jQuery' is defined, and if it's not, it provides the library by itself (version 1.7.2 - from Google's CDN). 

Once user clicks 'Allow Cookies' Permission Bar will set a cookie for that domain with a name 'permissionbar' that will expire in 365 days. This means that the plugin will only show up once per domain (per year). 


## How to Install?

1. Grab the Github repo and place it on the server in its own directory. All the files, including images and stylesheets, need to maintain it's relative structure - that is be in the same directory - for the plugin to work correctly. 
2. Put the following code on the all relevant pages of your website right before the &lt;/body&gt; tag.:

	<code>
	&lt;script type="text/javascript" src="PATH-TO/permissionbar-latest.min.js"&gt;&lt;/script&gt;
	</code>
	