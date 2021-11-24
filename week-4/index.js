import { series } from "./data.js";
import { fancyLogSeriesReport } from "./utils.js";

export function SeriesTracker(series) {
  this.numberOfWatched = 0;
  this.numberOfUnWatched = 0;
  this.series = [];
  this.lastSerie = undefined;
  this.currentSerie = undefined;
  this.nextSerie = undefined;

  this.add = function (serie) {
    this.series.push(serie);
    if (serie.isWatched) {
      this.numberOfWatched++;
      if (!this.lastSerie) {
        this.lastSerie = serie;
      } else {
        if (this.lastSerie.finishedDate < serie.finishedDate) {
          this.lastSerie = serie;
        }
      }
    } else {
      this.numberOfUnWatched++;
      if (serie.isCurrent) {
        if (!this.currentSerie) {
          this.currentSerie = serie;
        }
      } else if (!this.nextSerie) {
        this.nextSerie = serie;
      }
    }
  };

  if (series.length > 0) {
    series.forEach((serie) => {
      this.add(serie);
    });
  }

  this.finishSerie = function () {
    this.series.forEach((serie) => {
      if (serie === this.currentSerie) {
        serie.isWatched = true;
        serie.isCurrent = false;
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0");
        const yyyy = today.getFullYear();
        today = dd + "/" + mm + "/" + yyyy;
        serie.finishedDate = today;
      }
      if (serie === this.nextSerie) {
        this.currentSerie = serie;
        serie.isCurrent = true;
      }
    });
    this.lastSerie = this.currentSerie;
    if (this.nextSerie === this.currentSerie && !serie.isWatched && !serie.isCurrent) {
      this.nextSerie = serie;
    }
  };

  this.printSeriesReport = function () {
    fancyLogSeriesReport(this);
  };
}

// Case 1
/* const mySeriesTracker = new SeriesTracker(series);
mySeriesTracker.printSeriesReport(); */

// Case 2
/* const mySeriesTracker = new SeriesTracker(series);
mySeriesTracker.finishSerie();
mySeriesTracker.printSeriesReport(); */

// Case 3
/* const mySeriesTracker = new SeriesTracker(series);
const newSerie = {
  id: "111",
  name: "Arrested Development",
  genre: "Sitcom",
  directorId: "4"
};
mySeriesTracker.add(newSerie);
mySeriesTracker.printSeriesReport(); */
