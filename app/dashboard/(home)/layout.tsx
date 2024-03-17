import { Header } from './components/header';

const LayoutHome = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <Header />
      {children}
    </div>
  );
};

export default LayoutHome;
