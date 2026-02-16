
// A small component for the body, receiving user data via props
export function ProfileBody({ user }) {
  return (
    <div>
      <p>Hello, {user.name}! Welcome to your profile page.</p>
    </div>
  );
}