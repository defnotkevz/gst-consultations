type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <div className=" w-screen -translate-x-1/2 fixed bottom-0 bg-gray-200 px-5">
      {children}
    </div>
  );
};

export default Container;
