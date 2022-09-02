<script setup>
const user = $ref("");
const errorMessage = $ref("");
const repos = $ref([]);
const reposAdded = useRepos();
const loading = $ref(false);
// const selectedTheme = $ref(null);
let userData = useUser();

const fetchUserData = async () => {
  loading = true;
  try {
    const [response, userDataResponse] = await Promise.all([
      $fetch(`https://api.github.com/users/${user}/repos`),
      $fetch(`https://api.github.com/users/${user}`),
    ]);
    errorMessage = "";
    if (response.length < 1) {
      errorMessage = "No repos found";
      return;
    }
    loading = false;
    repos = response
      .map((el) => ({
        name: el.name,
        url: el.url,
        description: el.description,
        stars: el.stargazers_count,
        id: el.id,
      }))
      .sort((a, b) => b.stars - a.stars);
    userData.value = userDataResponse;
    document.activeElement.blur();
  } catch (error) {
    console.log(error);
    loading = false;
    errorMessage = "User not found";
    user = "";
    setTimeout(() => {
      errorMessage = "";
    }, 3000);
  }
};

const repoAdded = (repo) => {
  // added twice => deletion
  if (reposAdded.value.some((el) => el.id === repo.id)) {
    reposAdded.value = reposAdded.value.filter((el) => el.id !== repo.id);
    return;
  }
  reposAdded.value = [...reposAdded.value, repo];
};
</script>
<template>
  <div>
    <div class="flex flex-col mx-auto justify-center items-center mt-20">
      <VTitle class="text-center"> Create your portfolio in seconds </VTitle>
      <form
        @submit.prevent="fetchUserData"
        class="flex h-8 items-end justify-center mt-8"
      >
        <VInput
          v-model="user"
          placeholder="Github username"
          class="w-52 h-full"
        />
        <PrimaryButton :disabled="!user || loading" class="h-full ml-4">
          {{ !loading ? "Search 🔍" : "Loading..." }}</PrimaryButton
        >
      </form>
      <Transition>
        <ErrorFeedback
          mode="out-in"
          :error="errorMessage"
          v-if="errorMessage"
        />
      </Transition>
    </div>
    <Transition mode="out-in">
      <div class="mt-10" v-if="repos.length > 0">
        <VSubtitle class="p-1 ml-6 md:ml-24 mb-4">
          Select the repositories you would like to add
        </VSubtitle>
        <div class="flex justify-center w-full flex-wrap gap-8">
          <RepoCard
            @repoAdded="repoAdded"
            v-for="repo in repos"
            :key="repo.id"
            :repo="repo"
          />
        </div>
      </div>
    </Transition>
    <!-- <Transition mode="out-in">
      <div class="mt-10" v-if="reposAdded.length > 0">
        <VSubtitle class="ml-6 p-1 md:ml-24 mb-4"
          >Select the template you like the most</VSubtitle
        >
      </div>
    </Transition> -->
    <div
      v-if="reposAdded.length > 0"
      class="w-full flex items-center justify-center my-12"
    >
      <PrimaryButton class="mx-auto" @click="navigateTo('/generate')"
        >¡Create your Portfolio!</PrimaryButton
      >
    </div>
  </div>
</template>
