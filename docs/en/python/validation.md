# Validation

The `mrio` library provides functions to validate whether a file is an [**mGeoTIFF**](https://www.google.com/) or a [**tGeoTIFF**](https://www.google.com/), ensuring adherence to their respective metadata specifications.

## `mrio.is_mgeotiff`

Determines if a file is a valid **Multi-dimensional GeoTIFF (mGeoTIFF)**. A
valid mGeoTIFF must include `md:pattern` and `md:coordinates` in its metadata.
Check the [mGeoTIFF specification](https://www.google.com/) for more details.

```python
mrio.is_mgeotiff(path: PathLike, strict: bool = False) -> bool
```

**Parameters:**

- `path`: The file path or name of the GeoTIFF file to validate
- `strict`: If True, raises detailed exceptions for validation failures.

**Returns:**

`True`:  if the file is a mGeoTIFF; `False` otherwise.

**Example:**

```python
import mrio

result = mrio.is_mgeotiff("image.tif")
print(result)  # True if it's an mGeoTIFF
```


## `mrio.is_tgeotiff`

Determines if a file is a valid **Temporal GeoTIFF (tGeoTIFF)**. Valid 
tGeoTIFFs must conform to strict `md:pattern` rules and include both 
mGeoTIFF fields and temporal attributes. Check the 
[tGeoTIFF specification](https://www.google.com/) for more details.

```python
is_tgeotiff(path: PathLike, strict: bool = False) -> bool:
```

**Parameters:**

- `path`: The path or name of the TIFF file.
- `strict`: If True, raise exceptions for validation failures

**Returns:**

`True`:  if the file is a tGeoTIFF; `False` otherwise.

**Example:**

```python
import mrio

result = mrio.is_tgeotiff("temporal_stack.tif")
print(result)  # True if it's a tGeoTIFF
```
