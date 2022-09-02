<script setup>
const userData = useUser();
const reposAdded = useRepos();

const websiteCode =
  userData.value.id && reposAdded.value.length > 0
    ? useWebsiteGenerator(reposAdded.value, userData.value)
    : null;

const downloadWebsiteCode = () => {
  const element = document.createElement("a");
  const file = new Blob([websiteCode], { type: "text/plain" });
  element.href = URL.createObjectURL(file);
  element.download = "index.html";
  document.body.appendChild(element); // Required for this to work in FireFox
  element.click();
};
</script>
<template>
  <div
    v-if="websiteCode"
    class="flex flex-col mx-auto justify-center items-center mt-20"
  >
    <VTitle> Your portfolio is Ready</VTitle>
    <PrimaryButton class="mt-8" @click="downloadWebsiteCode">
      Download the source code
    </PrimaryButton>
    <span class="text-white text-xs my-4"> Or </span>
    <SecondaryButton> Deploy it on Netlify </SecondaryButton>
  </div>
</template>
