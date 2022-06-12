const sendmailTemplate = (
  targetmail: string,
  tokenName: string,
  tokenPrice: Number,
) => {
  return `
    <html>
    <style>
      h1 {
        color: #515151
      }
      p {
        color: #000000
      }
    </style>
    <h1 class="text-xl "> Hi ${targetmail} </h1>
    <p class>Now ${tokenName} = ${tokenPrice}$</p>
    </html>

  `;
};

export default sendmailTemplate;
