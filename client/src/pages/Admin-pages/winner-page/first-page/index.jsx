import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  collegeList,
  gradeOptions,
  winnerResultFirstInitialFormData,
} from "@/config";
import { AdminContext } from "@/context/admin-context";
import { Trash2Icon } from "lucide-react";
import { useContext } from "react";

function FirstWinnerPage() {
  const {
    isGroupToggled,
    winnerFirstFormData,
    setWinnerFirstFormData,
    isSharedGroupToggled,
  } = useContext(AdminContext);
  function handleNewStudents() {
    setWinnerFirstFormData([
      ...winnerFirstFormData,
      { ...winnerResultFirstInitialFormData[0] },
    ]);
  }

  function handleStudentNameChange(event, currentIndex) {
    let cpyWinnerFisrtFormdata = [...winnerFirstFormData];
    cpyWinnerFisrtFormdata[currentIndex] = {
      ...cpyWinnerFisrtFormdata[currentIndex],
      studentName: event.target.value,
    };
    setWinnerFirstFormData(cpyWinnerFisrtFormdata);
  }

  function handlePointChange(event, currentIndex) {
    let cpyWinnerFisrtFormdata = [...winnerFirstFormData];
    cpyWinnerFisrtFormdata[currentIndex] = {
      ...cpyWinnerFisrtFormdata[currentIndex],
      points: event.target.value,
    };
    setWinnerFirstFormData(cpyWinnerFisrtFormdata);
  }

  function handleCollegeNameChange(value, currentIndex) {
    let cpyWinnerFisrtFormdata = [...winnerFirstFormData];
    cpyWinnerFisrtFormdata[currentIndex] = {
      ...cpyWinnerFisrtFormdata[currentIndex],
      collegeName: value,
    };
    setWinnerFirstFormData(cpyWinnerFisrtFormdata);
  }

  function handleGradeChange(value, currentIndex) {
    let cpyWinnerFisrtFormdata = [...winnerFirstFormData];
    cpyWinnerFisrtFormdata[currentIndex] = {
      ...cpyWinnerFisrtFormdata[currentIndex],
      grade: value,
    };
    setWinnerFirstFormData(cpyWinnerFisrtFormdata);
  }

  function handleDeleteStudent(index) {
    setWinnerFirstFormData((prevData) =>
      prevData.filter((_, i) => i !== index)
    );
  }

  return (
    <Card>
      <CardHeader>
        <div>
          <Button onClick={handleNewStudents}>Add Students</Button>
        </div>
        <div className="flex  justify-center items-center">
          <h2 className="font-subHeading text-2xl">First Prize</h2>
        </div>
      </CardHeader>
      {winnerFirstFormData.map((item, index) => (
        <CardContent key={index} className="border-b">
          {index > 0 ? (
            <div className="mt-2">
              <Trash2Icon
                color="red"
                size={30}
                className="cursor-pointer"
                onClick={() => handleDeleteStudent(index)}
              />
            </div>
          ) : null}

          <div className="flex justify-center mb-2">
            <h1> Student {index + 1} </h1>
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <Label>Student Name</Label>
              <Input
                required
                type="text"
                placeholder="Enter student name..."
                name={`student-${index + 1}`}
                value={winnerFirstFormData[index]?.studentName}
                onChange={(event) => handleStudentNameChange(event, index)}
              />
            </div>
            <div>
              <Label>College Name</Label>
              <Select
                disabled={isGroupToggled}
                onValueChange={(value) => handleCollegeNameChange(value, index)}
                value={winnerFirstFormData[index]?.collegeName}
              >
                <SelectTrigger
                  className={`${isGroupToggled ? "bg-gray-300" : ""}`}
                >
                  <SelectValue placeholder="College Name" />
                </SelectTrigger>
                <SelectContent className="text-ellipsis overflow-hidden max-w-3xs  sm:max-w-lg">
                  {collegeList.map((college) => (
                    <SelectItem key={college.id} value={college.label}>
                      {college.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Grade</Label>
              <Select
                disabled={isGroupToggled}
                onValueChange={(value) => handleGradeChange(value, index)}
                value={winnerFirstFormData[index]?.grade}
              >
                <SelectTrigger
                  className={`${isGroupToggled ? "bg-gray-300" : ""}`}
                >
                  <SelectValue placeholder="Grade Point" />
                </SelectTrigger>
                <SelectContent className="text-ellipsis overflow-hidden max-w-3xs  sm:max-w-lg">
                  {gradeOptions.map((grade) => (
                    <SelectItem key={grade.id} value={grade.label}>
                      {grade.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Point</Label>
              <Input
                disabled={isGroupToggled || isSharedGroupToggled}
                className={`${
                  isGroupToggled || isSharedGroupToggled ? "bg-gray-300" : ""
                } `}
                type="number"
                placeholder="Enter point..."
                name={`point-${index + 1}`}
                value={winnerFirstFormData[index]?.points}
                onChange={(event) => handlePointChange(event, index)}
              />
            </div>
          </div>
        </CardContent>
      ))}
    </Card>
  );
}

export default FirstWinnerPage;
