import AuthLayout from '../../components/AuthLayout';
import SignUpForm from '../../components/SignUpForm';

export default function RegisterTeacherPage() {
  return (
    <AuthLayout>
      <SignUpForm userType="profesor" />
    </AuthLayout>
  );
}
