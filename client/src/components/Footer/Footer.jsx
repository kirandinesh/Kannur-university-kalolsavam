function Footer() {
  return (
    <footer className="w-full text-center py-1 mt-5 border-t border-gray-300 text-sm text-gray-600 ">
      <div className="container mx-auto px-4">
        <p className="text-xs font-semibold">
          © 2024 College Kalolsavam | Celebrating Art & Culture
        </p>
        <p className="text-xs mt-1">
          Designed & Developed by{" "}
          <span className="font-medium">Kiran Dinesh</span>
        </p>
        <a
          href="https://www.instagram.com/your_college_instagram" // Replace with actual Instagram link
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-600 font-semibold hover:underline  inline-block"
        >
          Follow Us on Instagram
        </a>
      </div>
    </footer>
  );
}

export default Footer;
