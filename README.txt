Damn Vulnerable FirefoxOS Application
Author: Rob Fletcher (:omerta) rfletcher@mozilla.com

The purpose of this application is to demonstrate some common vulnerabilities
that the FirefoxOS Security Team find will performing audits.

Pre-requisite: web application security knowledge

*******************************************************************************
Setup:
  1. Download git repo to a directory, say ~/dvfa/
  2. Download FirefoxOS Simulator Add-On and Install
  3. Point FirefoxOS Simulartor to the manifest file at ~/dvfa/manifest.webapp
  4. Start simulator and navigate to DVFA application.
*******************************************************************************
HTML/JS Injection:
  In this vulnerability, we demonstrate how the misuse of innerHTML can lead to
  XSS attacks [1].

  textContent should be used instead of innerHTML whenever possible.
  
  Not heavily discussed are other means mitigating XSS attacks (HTML entity
  encoding, etc.) but OWASP has a good 'cheatsheet' that can be found at [2].

*******************************************************************************
Web Activities:
  MDN has a great page on WebActivities that can be found at [3].

  Vulnerability 1:
    When handling a WebActivity, we must ensure to verify the type of activity
    in order to not be handed malicious data from any WebActivity. Specifically,
    we should verify activityRequest.source.name is equal to the WebActivity
    name we expect.

    In this example, we see an unauthorized WebActivity was launched and
    would've been able to perform a specific action that should be limited to a
    specific WebActivity. For this case:

    if(activityRequest.name === "dvfa") { .... }

  Vulnerability 2:
    We have no control of what application will handle our WebActivity when we
    launch it. Therfore, we should be careful in the information we provide.

    In this example, we leak a user secret by sending it as part of the
    WebActivity data.

*******************************************************************************
Extraneous Permissions:
  In this example, we see how the extraneous 'contacts' permissions allows the
  application to retrieve, add, and delete contacts unecessarily.

  Applications should follow the "principle of least permission" [4].

*******************************************************************************
postMessage
  MDN has a great page on the security implications of postMessage at [5].

  In this example, we see a message handler that does no extra checking on
  source or origin of postMessages it receives. Therefore any JS within the same
  Window can send messages that will be processed.

  To further exacerbate the issue, we have another example of innerHTML being
  misused. This makes this example very bad, because an attacker's JS from a
  different origin can initiate an XSS in our application's origin.

  To mitigate this issue, the developer should check origin/source of
  postMessages it wishes to handle. Furthermore, the developer should not be
  using innerHTML like this (see our discussion on HTML injection).

*******************************************************************************
Insecure Communication via HTTP
  TBD - right now thinking of an example of a simple GET/POST over HTTP that
  leaks something, but some problems with demonstrating this. Particularly, how
  do we proxy request?

*******************************************************************************
DoS
  TBD - seems kinda lame.

*******************************************************************************
References:
[1]https://www.owasp.org/index.php/Cross-site_Scripting_%28XSS%29
[2]https://www.owasp.org/index.php/XSS_%28Cross_Site_Scripting%29_Prevention_Cheat_Sheet
[3]https://developer.mozilla.org/en-US/docs/WebAPI/Web_Activities
[4]https://developer.mozilla.org/en-US/Firefox_OS/Security/Security_model#Principle_of_Least_Permissions
[5] https://developer.mozilla.org/en-US/docs/Web/API/Window.postMessage#Security_concerns
