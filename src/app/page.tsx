import { AddressForm } from '@app/_/AddressForm';
import { Balance } from '@app/_/Balance';

const Home = () => (
  <main className="dark mx-auto h-full max-w-md space-y-5 p-10">
    <AddressForm />
    <Balance />
  </main>
);

export default Home;
