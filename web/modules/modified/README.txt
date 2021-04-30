En el módulo Fluid comment se mofica el archivo fluid_comment.info.yml para haerlo compatible con Drupal 9

CONTENIDO ANTERIOR
--------------------------------
name: Fluid Comments
type: module
description: Enhances the user experience of your site's comment system.
package: Core
core: 8.x
dependencies:
  - drupal:comment
  - drupal:jsonapi
  - jsonapi_comment:jsonapi_comment
  - jsonapi_hypermedia:jsonapi_hypermedia

# Information added by Drupal.org packaging script on 2019-11-18
version: '8.x-1.0-alpha3'
project: 'fluid_comment'
datestamp: 1574112487


CONTENIDO NUEVO
--------------------------------
name: Fluid Comments
type: module
description: Enhances the user experience of your site's comment system.
package: 'Modified'
core: 8.x
core_version_requirement: ^8 || ^9
dependencies:
 dependencies:
   - drupal:comment
   - drupal:jsonapi

# Information added by Drupal.org packaging script on 2019-11-18
version: '8.x-1.0-alpha3'
project: 'fluid_comment'
datestamp: 1574112487

