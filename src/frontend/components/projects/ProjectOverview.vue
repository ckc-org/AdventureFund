<template>
  <v-container class="width-container pb-16">
    <v-row>
      <!--      Header content -->
      <v-col class="pa-0 mr-7">
        <div class="font-40 weight-700 black--text">
          {{ project.title }}
        </div>
        <div class="font-20 mb-5">
          Lead by {{ project.author }}
        </div>

        <v-img
          :src="project.banner_image"
          alt="Banner Image"
          height="420"
          width="100%"
        />
      </v-col>

      <v-col cols="4" class="d-flex align-end">
        <ContributeBlock :project="project"/>
      </v-col>
    </v-row>
    <!--    Body Content-->
    <v-row class="mt-7">
      <v-col cols="8">
        <div class="font-30 weight-700">
          About this project:
        </div>
        <v-sheet v-html="project.about_section" class="transparent mt-6 mr-10" max-width="100%">
<!--          This will be sanitized when saved to DB-->
        </v-sheet>
      </v-col>
      <v-col cols="4">
        <div class="right-sticky-container">
        <AboutAuthor :project="project"/>
        <LocationBlock class="mt-7" :project="project"/>
        </div>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import ContributeBlock from "./ContributeBlock"
import AboutAuthor from "./AboutAuthorBlock"
import LocationBlock from "./LocationBlock"

export default {
  components: { LocationBlock, AboutAuthor, ContributeBlock },
  props: {
    project_id: { type: Number }
  },
  data: () => ({
    project: {
      id: 1,
      marker: { x: 19.9, y: 43.17 },
      banner_image: "https://images.unsplash.com/photo-1501963589393-2e1552dfa94a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dW5kZXJ3YXRlciUyMGFkdmVudHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      title: "The Search for a World Underwater",
      author: "Chris Colombus",
      goal: 150000,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to Lorem ipsume doreim latchi mach nati Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris",
      contribution_count: 1200,
      amount_funded: 25346,
      percent_funded: 40,
      about_section: `<p class="has-line-data" data-line-start="0" data-line-end="1"><img src="https://images.unsplash.com/photo-1617380613434-7495e9b45dfb?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZXhwZWRpdGlvbnxlbnwwfHwwfHw%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60" alt="Unsplash Image"></p><p class="has-line-data" data-line-start="2" data-line-end="3">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.</p><p class="has-line-data" data-line-start="4" data-line-end="5">The git fetch command downloads commits, files, and refs from a remote repository into your local repo. Fetching is what you do when you want to see what everybody else has been working on. It’s similar to svn update in that it lets you see how the central history has progressed, but it doesn’t force you to actually merge the changes into your repository. Git isolates fetched content from existing local content; it has absolutely no effect on your local development work. Fetched content has to be explicitly checked out using the git checkout command. This makes fetching a safe way to review commits before integrating them with your local repository.</p><p class="has-line-data" data-line-start="6" data-line-end="7"><img src="https://images.unsplash.com/photo-1504061770815-81c22ffcbaa7?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZXhwZWRpdGlvbnxlbnwwfHwwfHw%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60" alt="Unsplash Image"></p><p class="has-line-data" data-line-start="8" data-line-end="9">The git fetch command downloads commits, files, and refs from a remote repository into your local repo. Fetching is what you do when you want to see what everybody else has been working on. It’s similar to svn update in that it lets you see how the central history has progressed, but it doesn’t force you to actually merge the changes into your repository. Git isolates fetched content from existing local content; it has absolutely no effect on your local development work. Fetched content has to be explicitly checked out using the git checkout command. This makes fetching a safe way to review commits before integrating them with your local repository.</p>`
    }
  })
}
</script>

<style scoped lang="stylus">
.right-sticky-container
  position: sticky;
  top: 20px;

.row
  margin 0
  padding 0

.col
  padding 0
</style>
