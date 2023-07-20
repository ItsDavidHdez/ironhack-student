type Data = {
  status: string;
  data: number[];
};

async function fetchData(url: string) {
  const data = {
    status: 'success',
    data: [1, 2, 3, 4, 5],
  };

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === 'success') {
        resolve(data);
      } else {
        reject('The url is invalid');
      }
    }, 2000);
  });
}

function processData() {
  let dataCount = 0;
  setTimeout(() => {
    fetchData('success')
      .then((data: any) => {
        data.data.map((dat: any) => {
          dataCount += dat * 2;
        });

        console.log(dataCount);
        return dataCount;
      })
      .catch((error) => {
        console.error(error);
      });
  }, 1000);
}

function displayData() {
  processData();
}

function fetchAndProcessData(url: string) {
  try {
    fetchData(url);
    processData();
    displayData();
  } catch (error) {
    console.error(error);
  }
}

fetchAndProcessData('success');
