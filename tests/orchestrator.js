import retry from "async-retry";

async function waitForAllServices() {
  await waitForWebServer();

  async function waitForWebServer() {
    return retry(fechStatusPage, {
      retries: 100,
    });

    async function fechStatusPage() {
      const response = await fetch("http://localhost:3000/api/v1/status");
      await response.json();
    }
  }
}

export default {
  waitForAllServices,
};
