
const Footer = () => {

  const date = new Date();
  const getCurrentYear = date.getFullYear()
  console.log(getCurrentYear)

  return (
    <div className="max-w-6xl mx-auto flex flex-col  px-4 py-8 text-center text-xs opacity-40">
      {`© Copyright Ashish Saha ${getCurrentYear}. All Rights Are Reserved.`}
    </div>
  );
};

export default Footer;
