const AboutMeContent = () => {
  const content = `
    /**
     * About me
     * I have 5 years of experience in web
     * development lorem ipsum dolor sit amet, 
     * consectetur adipiscing elit, sed do eiusmod
     * tempor incididunt ut labore et dolore
     * magna aliqua. Ut enim ad minim veniam,
     * quis nostrud exercitation ullamco laboris
     * nisi ut aliquip ex ea commodo consequat.
     * Duis aute irure dolor in reprehenderit in
     *
     * Duis aute irure dolor in reprehenderit in
     * voluptate velit esse cillum dolore eu fugiat 
     * nulla pariatur. Excepteur sint occaecat 
     * officia deserunt mollit anim id est laborum.
     */
  `;
  return (
    <div className="w-full h-full flex flex-col gap-4">
      <div className="flex justify-start w-full h-full text-link overflow-auto scrollbar-thin scrollbar-thumb-link scrollbar-track-transparent">
        <div className="pt-6 pl-2 pr-0 text-right">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p>10</p>
          <p>11</p>
          <p>12</p>
          <p>13</p>
          <p>14</p>
          <p>15</p>
          <p>16</p>
        </div>
        <pre>
          <code className="p-0">{content}</code>
        </pre>
      </div>
    </div>
  );
};

export default AboutMeContent;
