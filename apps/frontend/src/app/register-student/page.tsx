import AuthLayout from '../../components/AuthLayout';
import SignUpForm from '../../components/SignUpForm';

export default function RegisterStudentPage() {
  return (
    <AuthLayout>
      <SignUpForm userType="estudiante" />
    </AuthLayout>
  );
}
