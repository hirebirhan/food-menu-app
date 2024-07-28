// src/app/page.tsx or any other component/page where you want to use it
import DashboardLayout from "../AdminLayout";
import { RegisterMenuItem } from '../../components/RegisterMenuItem';

const Register = () => {
    return (
        <DashboardLayout>      
      <p className="mt-2 text-neutral-secondary-text"> Register New Item</p>   
        <div>
      <RegisterMenuItem />
    </div>      
    </DashboardLayout>
    );
}

export default Register;