export interface Project {
  /**Project Title */
  title?: string
  /**URL for image of the project. */
  imageUrl?: string
  /**Role played in project. (e.g. Front End Dev, Sole Developer, Back End Dev)*/
  role?:string
  /**Short description of the project, used in project thumbnail. */
  snippet?: string
  /**Long description of project, used in single project view. */
  description?: string
  /**Text for call to action button- links to live project demo if possible. */
  buttonText?: string
  /**Url to Github repo */
  repoUrl?:string
  /**Url where the user can navigate and find a live demo */
  demoUrl?:string
  /**List of all technologies and skills used for the project, used to sort and filter project list. */
  tags?: string[]
}
