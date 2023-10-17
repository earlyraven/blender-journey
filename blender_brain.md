# Blender Brain
Day 1:
# Blocky Robot
Install and launch blender and select initial cube by clicking on it (though it may already be selected).
The default cube is 2x2x2 in size.

Copy object:
Shift + D
Copies the selected object in place and grabs it

Grab object:
G
Grabs the selected object (preparing to move it)

Ungrab object (set object down):
ENTER
Ungrabs the grabbed object.  Sets it down so it is no longer moved.

Move object by integer amount along specific axis:
[x,y, or z] number ENTER
Moves the grabbed object number units in the selected x, y, or z direction and ungrabs it.

Delete object:
DELETE
Deletes the selected object.

Undo:
Control + Z
Undoes the last change.


## Example File
For an example creation using just the above commands:
see blocky_robot


## Try it yourself:
Use the above commands to try to create another 3d object using just cubes.



# Blocky Robot Partitioned
Multi-select objects (Method 1):
Click and drag to form a rectangle to enclose the items you wish to select, then release.
Selects the objects within the rectangle.

Multi-select objects (Method 2):
Hold control and click on each cube you wish to select.
Will seleect each clicked cube.

Multi-select objects (Method 3):
Hold shift and either click on each cube to select or click and drag to enclose in a rectangle.
Will select chosen cubes.

Method 2 and Method 3 above can also be used in the object panel on the right.

Group selected objects into a collection:
With objects selected, right-click and chose "Move to Collection," either choose a current collection or generate a new one.  If a new one is generated, name the collection, if desired, and click ok.

Create a new empty collection
Right click on navigation panel and select "New Collection."
Creates a new, empty collection.

Add to collection (drag-and-drop)
With objects selected in panel, right-click one of them and drag it to the collection while holding the right mouse button down, then release it.
Moves the selected objects into the collection.


## Example File
see blocky_robot_partitioned

## Try it yourself:
standard message

# Blocky Robot Colored
Rename a collection:
Double click on a collection in the righthand panel, type the new name and press ENTER.
Renames the chosen collection.

Select all in collection:
Right-click collection in righthand panel, and select "Select Objects."
Selects all objects in the collection.

Change material of all objects in collection:
A. Select one of the objects, delete the current material, and add a new material and customize as desired.
B. Select all objects in the collection.
C. Shift + L
D. Link Material (seems to be failing now, maybe something else)
===TODO: fix steps.
Changes all objects in the collection to use the new material.

===<maybe add more here>

## Example File
see blocky_robot_colored

## Try it yourself:
standard message









