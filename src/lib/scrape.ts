import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const token = process.env.JWT_TOKEN;

const years = [2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024];

async function fetchNotificationCategory() {
  try {
    const response = await axios.get(
      "https://taxinformation.cbic.gov.in/api/cbic-notification-msts/fetchCategory/1000001",
      {
        headers: {
          Authorization1: `homeToken ${token}`,
          "User-Agent":
            "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:127.0) Gecko/20100101 Firefox/127.0",
          Accept: "application/json, text/plain, */*",
          "Accept-Language": "en-US,en;q=0.5",
          "Accept-Encoding": "gzip, deflate, br, zstd",
          Referer:
            "https://taxinformation.cbic.gov.in/content-page/explore-notification",
          language: "en",
          Connection: "keep-alive",
          Cookie:
            "BIGipServerTAXPORTAL_WEB_POOL=!dahNw9oFsdynY+Pc6MoEqcDKEMxFLyDBRHcen2TMMpXVB9R7xRlZeLIPrx588CMebfDTf1V7EJGvZ8o=; BIGipServerTaxportal_app_POOL=57475594.36895.0000",
          "Sec-Fetch-Dest": "empty",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Site": "same-origin",
          Priority: "u=1",
        },
      }
    );

    return response.data.map((item) => item.notificationCategory);
  } catch (error) {
    console.error("Error fetching category data:", error);
  }
}

async function fetchCircularCategory() {
  try {
    const response = await axios.get(
      "https://taxinformation.cbic.gov.in/api/cbic-circular-msts/fetchCircularCategory/1000001",
      {
        headers: {
          Authorization1: `homeToken ${token}`,
          "User-Agent":
            "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:127.0) Gecko/20100101 Firefox/127.0",
          Accept: "application/json, text/plain, */*",
          "Accept-Language": "en-US,en;q=0.5",
          "Accept-Encoding": "gzip, deflate, br, zstd",
          Referer:
            "https://taxinformation.cbic.gov.in/content-page/explore-notification",
          language: "en",
          Connection: "keep-alive",
          Cookie:
            "BIGipServerTAXPORTAL_WEB_POOL=!dahNw9oFsdynY+Pc6MoEqcDKEMxFLyDBRHcen2TMMpXVB9R7xRlZeLIPrx588CMebfDTf1V7EJGvZ8o=; BIGipServerTaxportal_app_POOL=57475594.36895.0000",
          "Sec-Fetch-Dest": "empty",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Site": "same-origin",
          Priority: "u=1",
        },
      }
    );

    return response.data.map((item) => item.circularCategory);
  } catch (error) {
    console.error("Error fetching circular category data:", error);
  }
}

async function fetchOrderCategory() {
  try {
    const response = await axios.get(
      "https://taxinformation.cbic.gov.in/api/cbic-order-msts/order-category/1000001",
      {
        headers: {
          Authorization1: `homeToken ${token}`,
          "User-Agent":
            "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:127.0) Gecko/20100101 Firefox/127.0",
          Accept: "application/json, text/plain, */*",
          "Accept-Language": "en-US,en;q=0.5",
          "Accept-Encoding": "gzip, deflate, br, zstd",
          Referer:
            "https://taxinformation.cbic.gov.in/content-page/explore-notification",
          language: "en",
          Connection: "keep-alive",
          Cookie:
            "BIGipServerTAXPORTAL_WEB_POOL=!dahNw9oFsdynY+Pc6MoEqcDKEMxFLyDBRHcen2TMMpXVB9R7xRlZeLIPrx588CMebfDTf1V7EJGvZ8o=; BIGipServerTaxportal_app_POOL=57475594.36895.0000",
          "Sec-Fetch-Dest": "empty",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Site": "same-origin",
          Priority: "u=1",
        },
      }
    );

    return response.data.map((item) => item.orderCategory);
  } catch (error) {
    console.error("Error fetching order category:", error);
  }
}

async function fetchNotificationByYearAndCategory(
  year: number,
  category: string
) {
  try {
    const response = await axios.get(
      "https://taxinformation.cbic.gov.in/api/cbic-notification-msts/fetchNotificationByYearAndCategory",
      {
        params: {
          year: `${year}`,
          page: 0,
          size: 10,
          taxId: "1000001",
          category: `${category}`,
        },
        headers: {
          Authorization1: `homeToken ${token}`,
          "User-Agent":
            "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:127.0) Gecko/20100101 Firefox/127.0",
          Accept: "application/json, text/plain, */*",
          "Accept-Language": "en-US,en;q=0.5",
          "Accept-Encoding": "gzip, deflate, br, zstd",
          Referer:
            "https://taxinformation.cbic.gov.in/content-page/explore-notification",
          language: "en",
          Connection: "keep-alive",
          Cookie:
            "BIGipServerTAXPORTAL_WEB_POOL=!dahNw9oFsdynY+Pc6MoEqcDKEMxFLyDBRHcen2TMMpXVB9R7xRlZeLIPrx588CMebfDTf1V7EJGvZ8o=; BIGipServerTaxportal_app_POOL=57475594.36895.0000",
          "Sec-Fetch-Dest": "empty",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Site": "same-origin",
        },
      }
    );

    const notifications = response.data.map((item) => ({
      notificationNo: item.notificationNo,
      notificationName: item.notificationName,
      notificationCategory: item.notificationCategory,
      notificationDt: item.notificationDt,
      docFilePath: item.docFilePath,
      docFilePathHi: item.docFilePathHi,
    }));

    console.log(
      `Notifications for year ${year} and category ${category}:`,
      notifications
    );
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function fetchCircularByYearAndCategory(year, category) {
  try {
    const response = await axios.get(
      "https://taxinformation.cbic.gov.in/api/cbic-circular-msts/fetchCircularByYearCategory",
      {
        params: {
          year: `${year}`,
          page: 0,
          size: 10,
          taxId: "1000001",
          category: `${category}`,
        },
        headers: {
          Authorization1: `homeToken ${token}`,
          "User-Agent":
            "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:127.0) Gecko/20100101 Firefox/127.0",
          Accept: "application/json, text/plain, */*",
          "Accept-Language": "en-US,en;q=0.5",
          "Accept-Encoding": "gzip, deflate, br, zstd",
          Referer:
            "https://taxinformation.cbic.gov.in/content-page/explore-notification",
          language: "en",
          Connection: "keep-alive",
          Cookie:
            "BIGipServerTAXPORTAL_WEB_POOL=!dahNw9oFsdynY+Pc6MoEqcDKEMxFLyDBRHcen2TMMpXVB9R7xRlZeLIPrx588CMebfDTf1V7EJGvZ8o=; BIGipServerTaxportal_app_POOL=57475594.36895.0000",
          "Sec-Fetch-Dest": "empty",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Site": "same-origin",
          Priority: "u=1",
        },
      }
    );

    const circulars = response.data.map((item) => ({
      circularNo: item.circularNo,
      circularName: item.circularName,
      circularCategory: item.circularCategory,
      circularDt: item.circularDt,
      docFilePath: item.docFilePath,
      docFilePathHi: item.docFilePathHi,
    }));

    console.log(
      `Circulars for year ${year} and category ${category}:`,
      circulars
    );
  } catch (error) {
    console.error("Error fetching circulars:", error);
  }
}

async function fetchInstructionsByYear(year) {
  try {
    const response = await axios.get(
      "https://taxinformation.cbic.gov.in/api/cbic-instruction-msts/fetch-instructions-year-category",
      {
        params: {
          year: `${year}`,
          page: 0,
          size: 10,
          taxId: "1000001",
        },
        headers: {
          Authorization1: `homeToken ${token}`,
          "User-Agent":
            "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:127.0) Gecko/20100101 Firefox/127.0",
          Accept: "application/json, text/plain, */*",
          "Accept-Language": "en-US,en;q=0.5",
          "Accept-Encoding": "gzip, deflate, br, zstd",
          Referer:
            "https://taxinformation.cbic.gov.in/content-page/explore-notification",
          language: "en",
          Connection: "keep-alive",
          Cookie:
            "BIGipServerTAXPORTAL_WEB_POOL=!dahNw9oFsdynY+Pc6MoEqcDKEMxFLyDBRHcen2TMMpXVB9R7xRlZeLIPrx588CMebfDTf1V7EJGvZ8o=; BIGipServerTaxportal_app_POOL=57475594.36895.0000",
          "Sec-Fetch-Dest": "empty",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Site": "same-origin",
          Priority: "u=1",
        },
      }
    );

    const instructions = response.data.map((item) => ({
      instructionNo: item.instructionNo,
      instructionName: item.instructionName,
      instructionDt: item.instructionDt,
      docFilePath: item.docFilePath,
    }));

    console.log(`Instructions for year ${year}:`, instructions);
  } catch (error) {
    console.error("Error fetching instructions:", error);
  }
}

async function fetchOrdersByYearAndCategory(year, category) {
  try {
    const response = await axios.get(
      "https://taxinformation.cbic.gov.in/api/cbic-order-msts/fetch-orders-year-category",
      {
        params: {
          year: `${year}`,
          page: 0,
          size: 10,
          taxId: "1000001",
          category: `${category}`,
        },
        headers: {
          Authorization1: `homeToken ${token}`,
          "User-Agent":
            "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:127.0) Gecko/20100101 Firefox/127.0",
          Accept: "application/json, text/plain, */*",
          "Accept-Language": "en-US,en;q=0.5",
          "Accept-Encoding": "gzip, deflate, br, zstd",
          Referer:
            "https://taxinformation.cbic.gov.in/content-page/explore-notification",
          language: "en",
          Connection: "keep-alive",
          Cookie:
            "BIGipServerTAXPORTAL_WEB_POOL=!Il+LHNiLU1OZtF/c6MoEqcDKEMxFL+jBJrd/hRNx5JFy5+ERxoh4lH2Prv4mTddzxa/eFa+RKta8pqg=; BIGipServerTaxportal_app_POOL=57475594.36895.0000",
          "Sec-Fetch-Dest": "empty",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Site": "same-origin",
          Priority: "u=1",
        },
      }
    );

    const orders = response.data.map((item) => ({
      orderNo: item.orderNo,
      orderName: item.orderName,
      orderDt: item.orderDt,
      docFilePath: item.docFilePath,
      docFilePathHi: item.docFilePathHi,
    }));

    console.log(`Orders for year ${year} and category ${category}:`, orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
  }
}

// Example usage
// fetchOrdersByYearAndCategory(2024, 'Order-CGST');

async function fetchData() {
  const notificationCategories = await fetchNotificationCategory();
  const circularCategories = await fetchCircularCategory();
  const orderCategories = await fetchOrderCategory();

  for (const year of years) {
    // for (const notificationCategory of notificationCategories) {
    //   await fetchNotificationByYearAndCategory(year, notificationCategory);
    // }
    // for (const circularCategory of circularCategories) {
    //   await fetchCircularByYearAndCategory(year, circularCategory);
    // }q
    for (const orderCategory of orderCategories) {
      await fetchOrdersByYearAndCategory(year, orderCategory);
    }
    // await fetchInstructionsByYear(year);
  }
}
