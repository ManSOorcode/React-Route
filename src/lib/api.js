const FIREBASE_DOMAIN = "https://quote-http-5699a-default-rtdb.firebaseio.com/";

export async function getAllQuotes() {
  const response = await fetch(`${FIREBASE_DOMAIN}/quotes.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch quotes.");
  }

  const transformedQuotes = [];

  for (const key in data) {
    const quoteObj = {
      id: key,
      ...data[key],
    };

    transformedQuotes.push(quoteObj);
  }

  return transformedQuotes;
}

export async function getSingleQuote(quoteId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/quotes/${quoteId}.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch quote.");
  }

  const loadedQuote = {
    id: quoteId,
    ...data,
  };

  return loadedQuote;
}

export async function addQuote(quoteData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/quotes.json`, {
    method: "POST",
    body: JSON.stringify(quoteData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not create quote.");
  }

  return null;
}

export async function addComment(requestData) {
  const response = await fetch(
    `${FIREBASE_DOMAIN}/comments/${requestData.quotesId}.json`,
    {
      method: "POST",
      body: JSON.stringify(requestData.commentData),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  console.log(data.name);
  // console.log(requestData);

  if (!response.ok) {
    throw new Error(data.message || "Could not add comment.");
  }

  return { commentId: data.name };
}

export async function getAllComments(quotesId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/comments/${quotesId}.json`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not get comments.");
  }
  const transformedComments = [];
  console.log(response);
  console.log(quotesId);
  console.log(data);
  for (const key in data) {
    const commentObj = {
      id: key,
      ...data[key],
    };

    transformedComments.push(commentObj);
  }
  console.log(transformedComments);

  return transformedComments;
}
