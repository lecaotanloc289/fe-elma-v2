const GradientImage = () => {
  return (
    <div className="w-[350px]  max-w-sm rounded-xl overflow-hidden relative">
      <div className="relative h-[500px]">
        <img
          src="https://plus.unsplash.com/premium_photo-1671638543170-8a1b232c11b9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="New Member"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

        <div className="absolute bottom-5 left-5 right-5 m-4">
          <div className="mb-2 flex items-center space-x-1">
            <span className="w-2 h-2 rounded-full bg-white/70"></span>
            <span className="w-2 h-2 rounded-full bg-white/50"></span>
            <span className="w-2 h-2 rounded-full bg-white/30"></span>
          </div>

          <h3 className="text-lg text-white font-bold leading-tight mt-6 mb-2">
            Discount 25% for
            <br />
            New Member
          </h3>

          <span className="text-sm text-dark-text">
            Register now and subscribe our Newsletter to get and claim the 25%
            discount.
          </span>
        </div>
      </div>
    </div>
  );
};

export default GradientImage;
