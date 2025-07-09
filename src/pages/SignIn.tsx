import { SignIn } from "@clerk/clerk-react";

export default function SignInPage() {
  return (
    <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'center' }}>
      <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
    </div>
  );
}
