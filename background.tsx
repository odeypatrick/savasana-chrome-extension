chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "save-post") {
      // Handle saving post data to backend
      savePostData(message.post);
    }
  });
  
  const savePostData = async (post) => {
    try {
      const response = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(post)
      });
      const data = await response.json();
      console.log("Post saved:", data);
    } catch (error) {
      console.error("Error saving post:", error);
    }
  };
  
  const makeApiCall = async (url, options) => {
    let attempts = 0;
    const maxAttempts = 3;
    while (attempts < maxAttempts) {
      try {
        const response = await fetch(url, options);
        if (!response.ok) throw new Error("API call failed");
        return await response.json();
      } catch (error) {
        attempts++;
        console.error(`Attempt ${attempts} failed, retrying...`);
        if (attempts >= maxAttempts) throw error;
      }
    }
  };

  chrome.identity.getAuthToken({ interactive: true }, (token) => {
    if (chrome.runtime.lastError) {
      console.error(chrome.runtime.lastError.message);
    } else {
      console.log("User token:", token);
      // Use this token for API requests
    }
  });

  const saveAuthToken = (token) => {
    chrome.storage.local.set({ authToken: token }, () => {
      console.log("Token saved.");
    });
  };
  
  const getAuthToken = () => {
    chrome.storage.local.get(["authToken"], (result) => {
      console.log("Retrieved token:", result.authToken);
    });
  };

  chrome.identity.getProfileUserInfo((userInfo) => {
    if (userInfo.id) {
      console.log("User is already signed in:", userInfo);
    } else {
      console.log("User needs to sign in.");
    }
  });
  