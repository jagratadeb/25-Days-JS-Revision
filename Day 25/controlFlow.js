// Simulate user login and payment scenario
const userLoggedIn = true;
const hasDebitCard = true;
const loginFromGoogle = false;
const loginFromEmail = true;
const balance = 1000;

// Basic if statement
if (userLoggedIn) {
  console.log("✅ User is logged in");
}

// if-else chain for balance check
if (balance < 500) {
  console.log("⚠️ Balance is below ₹500");
} else if (balance < 750) {
  console.log("🟡 Balance is below ₹750");
} else if (balance < 900) {
  console.log("🟢 Balance is below ₹900");
} else {
  console.log("💰 Balance is ₹900 or more");
}

// Logical AND (&&) for purchase eligibility
if (userLoggedIn && hasDebitCard) {
  console.log("🛒 User can purchase courses");
}

// Logical OR (||) for login method
if (loginFromGoogle || loginFromEmail) {
  console.log("🔓 User logged in via Google or Email");
}

// Strict equality check
const score = "100";
if (score === 100) {
  console.log("✅ Strict match (type and value)");
} else {
  console.log("❌ No strict match");
}

// Scope demo with let
if (balance > 500) {
  let power = "fly";
  console.log("🦸 Power inside block:", power);
}
// console.log(power); // ❌ Uncommenting this will throw ReferenceError

// Shortened if syntax (implicit scope)
if (balance > 500) console.log("📈 Balance is healthy");

// Nested conditions
if (userLoggedIn) {
  if (hasDebitCard) {
    console.log("🎯 Ready for checkout");
  } else {
    console.log("💳 Add a payment method");
  }
}
