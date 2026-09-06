# Misc Images

To add a photo, place it in this directory and append an entry to the matching
`images` list in `_data/misc.yml`. The order in the list is the display order.
There is no two-image limit: slides, navigation dots and accessible labels all
use the list length. One image hides the navigation controls; an empty list
renders the paragraph without a disclosure arrow.

```yaml
      - src: /assets/img/misc/another-photo.webp
        alt: A meaningful description of the photo
        caption: A short caption
        credit: Photographer or source
        source: https://example.com/original-page
        width: 960
        height: 640
```

Use the image's actual pixel dimensions. Keep captions and credits short enough
for the two-line caption area. Images are displayed in full without cropping.
For new galleries, `text` contains the paragraph up to its final word, and
`ending` contains that word and punctuation so the arrow stays beside it.

## Selected Sources

Retrieved September 6, 2026. The originals were resized without cropping and
converted to WebP for this site. These are third-party media images; an open
redistribution license was not established during selection. Source links are
included with each image and do not imply a license grant.

- `cold-war-still.webp`: Film at Lincoln Center, Cold War (2012).
  https://www.filmlinc.org/films/cold-war/
- `cold-war-poster.webp`: Hong Kong theatrical poster, shown in ScreenAnarchy's
  November 3, 2012 review.
  https://screenanarchy.com/2012/11/counterpoint-review-cold-war.html
- `david-tao-stage.webp` and `david-tao-portrait.webp`: MTV Taiwan's September 23,
  2025 Soul Power II report. The article credits the supplied photos to
  Wei Da Culture.
  https://www.mtv.com.tw/news/newsdetail/12515

The controls use unmodified Font Awesome Free 6.4.2 SVG icons. Their license is
in `../icons/LICENSE.txt`.
