# EarthEngine-like I/O API

For users familiar with Google Earth Engine API, the `mrio` 
package provides a similar interface for reading and 
writing temporal COG files.

::: warning
The multi-dimensional COG files are not yet supported.
:::


## `mrio.Collection`

A drop-in replacement for the `ee.Collection` class 
in Google Earth Engine API. This class provides a
convenient way to load and manipulate temporal image
collections.

```python
mrio.Collection(file_path: PathLike) -> Collection:
```

**Parameters:**

- `file_path`: Path to the temporal image collection.

**Returns:**

An `Collection` object.

**Example:**

```python
import mrio

# Load a temporal image collection
ic = mrio.Collection("path/to/collection")
```

## `ic.select`

Selects bands from an image collection.

```python
ic.select(bands: List[str]) -> Collection:
```

**Parameters:**

- `bands`: List of band names to select.

**Returns:**

A `Collection` object with selected bands.

**Example:**

```python
# Select bands 'B1' and 'B2'
ic = (
    mrio.Collection("path/to/collection")
        .select(["B1", "B2"])
)
```


## `ic.filterDate`

Filter an ImageCollection by date range. The start and end may be [datetime](https://docs.python.org/3/library/datetime.html) objects, numbers (interpreted as seconds since 1970-01-01T00:00:00Z), or strings (such as '1996-01-01T08:00'). Based on 'system:time_start'.

```python
ic.filterDate(start: Union[str, int, datetime], end: Union[str, int, datetime]) -> Collection:
```

**Parameters:**

- `start`: Start date.
- `end`: End date.

**Returns:**

An `Collection` object filtered by date range.

**Example:**

```python
# Filter images between 2020-01-01 and 2020-12-31
ic = (
    mrio.Collection("path/to/collection")
        .filterDate("2020-01-01", "2020-12-31")
)
```

## `ic.filterBounds`

Filter a collection by intersection with simple a bounding box. The bounding box is expressed as a list of four numbers: [west, south, east, north]. 

```python
ic.filterBounds(bounds: List[float|int]) -> Collection:
```

**Parameters:**

- `bounds`: Bounding box coordinates represented as [west, south, east, north].

**Returns:**

An `Collection` object is filtered by a bounding box.

**Example:**

```python
# Filter images intersecting with the bounding box
ic = (
    mrio.ImageCollection("path/to/collection")
        .filterBounds([10, 20, 30, 40])
)
```


## `ic.getInfo`

Fetch the data of the image collection as a NumPy array.

```python
ic.getInfo() -> np.ndarray
```

**Returns:**

A NumPy array containing the data of the image collection.

**Example:**

```python
tensor = (
    mrio.Collection("image.tif")
        .select(["B01", "B02", "B03"])
        .FilterDate("2021-01-01", "2021-01-10")
        .FilterBounds(-76.2, 4.31, -76.1, 4.32)
        .getInfo()        
)    
```

## `ic.save`

Save the image collection to a Temporal COG file.

```python
ic.save(file_path: PathLike, **kwargs: Any) -> None
```

**Parameters:**

- `file_path`: Path to save the image collection.
- `**kwargs`: Additional keyword arguments passed to the writer.

**Example:**

```python
(
    mrio.ImageCollection("image.tif")
        .select(["B01", "B02", "B03"])
        .FilterDate("2021-01-01", "2021-01-10")
        .FilterBounds(-76.2, 4.31, -76.1, 4.32)
        .save("output.tif")        
)    
```

## `ic.bandNames`

Returns the names of the bands in the image collection.

```python
ic.bandNames() -> List[str]
```

**Returns:**

A list of band names in the image collection.

**Example:**

```python
import mrio
mrio.Collection("image.tif").bandNames()
```

## `ic.size`

Returns the number of images in the image collection.

```python
ic.size() -> int
```

**Returns:**

The number of images in the image collection.

**Example:**

```python
import mrio
mrio.Collection("image.tif").size()
```

## `ic.dateRange`

Returns the date range of the image collection.

```python
ic.dateRange() -> Tuple[datetime, datetime]
```

**Returns:**

A tuple containing the start and end date of the image collection.

**Example:**

```python
import mrio
mrio.Collection("image.tif").dateRange()
```

## `ic.bounds`

Returns the bounding box of the image collection.

```python
ic.bounds() -> List[float]
```

**Returns:**

A list containing the bounding box coordinates of the image collection.

**Example:**

```python
import mrio
mrio.Collection("image.tif").bounds()
```

