Setup:
  1. Download git repo to a directory, say ~/dvfa/
  2. Download FirefoxOS Simulator Add-On and Install
  3. Point FirefoxOS Simulartor to the manifest file at ~/dvfa/manifest.webapp
  4. Start simulator and navigate to DVFA application.

HTML Injection:
  We discuss the misuse of innerHTML and how textContent should be used when
  possible.
  
  Not heavily discussed are other means of HTML sanitization to prevent similar
  vulnerabilities.

Web Activities:
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

Extraneous Permissions
  In this example, we see how the extraneous 'contacts' permissions allows the
  application to retrive, add, and delete contacts unecessarily.

postMessage
  In this example, we see a message handler that does no extra checking on
  source or origin of postMessages it receives. Therefore any JS within the same
  Window can send messages that will be processed.

  To further exacerbate the issue, we have another example of innerHTML being
  misused. This makes this example very bad, because an attackers JS from a
  different origin can initiate an XSS in our origin.

  To mitigate this issue, the developer should send check origin/source of
  postMessages it wishes to handle. Furthermore, the developer should not be
  using innerHTML like this (see our discussion on HTML injection).

Insecure Communication via HTTP

DoS

