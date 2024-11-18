const PageWrapper = ({ children }) => {
  return (
    <div className="pb-20 pt-24">
      <div className="container max-w-[1024px]">{children}</div>
    </div>
  );
};
export default PageWrapper;
