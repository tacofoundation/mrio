# Validation

The `mrio` library provides functions to validate whether a file is an [**mCOG**](https://tacofoundation.github.io/mrio/en/specification/multidimensional-geotiff-specification.html) or a [**tCOG**](https://tacofoundation.github.io/mrio/en/specification/temporal-geotiff-specification.html), ensuring adherence to their respective metadata specifications.

## `mrio.is_mcog`

Determines if a file is a valid **mCOG**. A valid mCOG must include `md:pattern` and `md:coordinates` in its metadata.
Check the [mCOG specification](https://tacofoundation.github.io/mrio/en/specification/multidimensional-geotiff-specification.html) for more details.

```python
mrio.is_mcog(path: PathLike, strict: bool = False) -> bool
```

**Parameters:**

- `path`: The file path of the file to validate
- `strict`: If True, raises detailed exceptions for validation failures.

**Returns:**

`True`:  if the file is a mCOG; `False` otherwise.

**Example:**

```python
import mrio

result = mrio.is_mgeotiff("image.tif")
print(result)  # True if it's an mCOG
```

## `mrio.is_tcog`

Determines if a file is a valid **tCOG**. Valid 
tCOG must conform to strict `md:pattern` rules and include both 
mCOG fields and temporal attributes. Check the 
[tCOG specification](https://tacofoundation.github.io/mrio/en/specification/temporal-geotiff-specification.html) for 
more details.

```python
is_tcog(path: PathLike, strict: bool = False) -> bool:
```

**Parameters:**

- `path`: The path of the file.
- `strict`: If True, raise exceptions for validation failures

**Returns:**

`True`:  if the file is a tCOG; `False` otherwise.

**Example:**

```python
import mrio

result = mrio.is_tcog("temporal_stack.tif")
print(result)  # True if it's a tCOG
```
