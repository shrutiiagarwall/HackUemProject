// WebAuthn API for Fingerprint Authentication
document.getElementById('checkFingerprint').addEventListener('click', async function () {
  try {
    // Request biometric credentials
    const publicKeyCredentialRequestOptions = {
      challenge: new Uint8Array(32), // Random server-generated challenge
      allowCredentials: [
        {
          id: new Uint8Array(32),
          type: "public-key"
        }
      ],
      timeout: 60000, // Timeout for fingerprint scan
      userVerification: "required"
    };

    const credential = await navigator.credentials.get({
      publicKey: publicKeyCredentialRequestOptions
    });

    if (credential) {
      document.getElementById('fingerprintStatus').textContent = "Fingerprint authentication successful!";
    } else {
      document.getElementById('fingerprintStatus').textContent = "Fingerprint authentication failed.";
    }
  } catch (error) {
    console.error(error);
    document.getElementById('fingerprintStatus').textContent = "Error during fingerprint authentication.";
  }
});

// Open Camera for Face Scanning
document.getElementById('openCamera').addEventListener('click', function () {
  const videoElement = document.getElementById('cameraFeed');

  // Access user's camera
  navigator.mediaDevices.getUserMedia({ video: true })
    .then((stream) => {
      videoElement.srcObject = stream;
      document.getElementById('faceStatus').textContent = "Camera is active. Position your face in front of the camera.";
    })
    .catch((error) => {
      console.error(error);
      document.getElementById('faceStatus').textContent = "Error accessing camera.";
    });
});

// Stop the camera feed when the user leaves the page or completes the scan (optional feature)

// Identity Registration
document.getElementById('identityForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const fullName = document.getElementById('fullName').value;
  const passportNumber = document.getElementById('passportNumber').value;
  const country = document.getElementById('country').value;

  // Simulated submission to blockchain
  alert(`Identity Registered:\nName: ${fullName}\nPassport: ${passportNumber}\nCountry: ${country}\nBiometric data secured.`);
});

// Check Immigration Status
document.getElementById('checkStatus').addEventListener('click', function () {
  // Simulated blockchain data fetching
  const simulatedData = {
    status: 'Approved',
    entryDate: '2025-03-12',
    comments: 'Valid for 90 days stay'
  };

  const statusResult = `
    <h3>Immigration Status</h3>
    <p>Status: ${simulatedData.status}</p>
    <p>Entry Date: ${simulatedData.entryDate}</p>
    <p>Comments: ${simulatedData.comments}</p>
  `;

  document.getElementById('statusResult').innerHTML = statusResult;
});
