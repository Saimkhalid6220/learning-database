// pages/result.js
import { useRouter } from 'next/router';

export default function Result() {
  const router = useRouter();
  const { name, email } = router.query;

  return (
    <div>
      <h1>Form Submission Result</h1>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
}
