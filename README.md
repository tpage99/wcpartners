# WC Partners

<p align="center"><img src="https://github.com/tpage99/wcpartners/blob/master/src/images/wclogo.png" alt="wc partners logo"></p>

The website for WC Partners, the SB40 Board that serves individuals with developmental disabilities in the Webster County area.

The mission of WC Partners is to _advocate, enhance services, and positively impact the lives of citizens with developmental disabilities._

---

## Notes

### Events

Events on events page are in json located in the data folder ( src > data > events.json). Specific events are broken down in markdown files located in the _events_ folder ( src > pages > events) - go figure 😂. This is the URL reference for a "Learn more" link. Just a quick landing page or link back to a full page like the About page for board meeting events that get posted. List iterates over the following:

```{
    "title": "Title of Event",
    "date": "YYYY-MM-DD",
    "time": "time of event - no special formatting",
    "description": "description of the event - no special formatting",
    "url": "/events/#",
    "thumbnailImage": "url pulled from cloudinary or other resource used for image hosting"
  },

```

---
