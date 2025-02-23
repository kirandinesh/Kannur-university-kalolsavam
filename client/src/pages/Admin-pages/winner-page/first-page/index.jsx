import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import {
  collegeList,
  gradeOptions,
  groupwinnerResultFirstInitialFormData,
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
    groupWinnerFirstFormData,
    setGroupWinnerFirstFormData,
    setIsSharedGroupToggled,
  } = useContext(AdminContext);
  function handleNewStudents() {
    setWinnerFirstFormData([
      ...winnerFirstFormData,
      { ...winnerResultFirstInitialFormData[0] },
    ]);
  }

  function handleAddGroupMembers() {
    setGroupWinnerFirstFormData([
      ...groupWinnerFirstFormData,
      { ...groupwinnerResultFirstInitialFormData[0] },
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

  function handleStudentCodeChange(event, currentIndex) {
    let cpyWinnerFisrtFormdata = [...winnerFirstFormData];
    cpyWinnerFisrtFormdata[currentIndex] = {
      ...cpyWinnerFisrtFormdata[currentIndex],
      studentCode: event.target.value,
    };
    setWinnerFirstFormData(cpyWinnerFisrtFormdata);
  }

  //group
  function handleGroupMemberNameChange(event, currentIndex) {
    let cpyWinnerFisrtFormdata = [...groupWinnerFirstFormData];
    cpyWinnerFisrtFormdata[currentIndex] = {
      ...cpyWinnerFisrtFormdata[currentIndex],
      memberName: event.target.value,
    };
    setGroupWinnerFirstFormData(cpyWinnerFisrtFormdata);
  }

  //
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

  function handleDeleteMemeber(index) {
    setGroupWinnerFirstFormData((prevData) =>
      prevData.filter((_, i) => i !== index)
    );
  }

  function handleGroupSwitchToggle(value) {
    setIsSharedGroupToggled(value);
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between">
          <Button onClick={handleNewStudents}>Add Students</Button>{" "}
        </div>
        <div className="flex  justify-center items-center">
          <h2 className="font-subHeading text-2xl">First Prize</h2>
        </div>
        <div className="flex flex-col gap-5 justify-between">
          <div className="flex items-center  space-x-2">
            <Switch
              checked={isSharedGroupToggled}
              id="group-mode"
              onCheckedChange={(value) => handleGroupSwitchToggle(value)}
            />
            <Label htmlFor="group-mode">Group Item</Label>
          </div>
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
              <Label>Student Code</Label>
              <Input
                type="text"
                placeholder="Enter student code..."
                name={`student-${index + 1}`}
                value={winnerFirstFormData[index]?.studentCode}
                onChange={(event) => handleStudentCodeChange(event, index)}
              />
            </div>
            <div>
              <Label>College Name</Label>
              <Select
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
                type="number"
                placeholder="Enter point..."
                name={`point-${index + 1}`}
                value={winnerFirstFormData[index]?.points}
                onChange={(event) => handlePointChange(event, index)}
              />
            </div>
            {isSharedGroupToggled && (
              <div className="w-full flex justify-center items-center">
                <Button
                  onClick={handleAddGroupMembers}
                  className="w-full cursor-pointer"
                >
                  Add Group Memebers
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      ))}

      {isSharedGroupToggled &&
        groupWinnerFirstFormData &&
        groupWinnerFirstFormData.length > 0 &&
        groupWinnerFirstFormData.map((group, index) => (
          <CardFooter key={index}>
            <div className="w-full">
              <Label>Student Name</Label>
              <div className="flex gap-2 justify-center items-center">
                <Input
                  required
                  type="text"
                  placeholder="Enter Members name..."
                  name={`student-${index + 1}`}
                  value={groupWinnerFirstFormData[index]?.memberName}
                  onChange={(event) =>
                    handleGroupMemberNameChange(event, index)
                  }
                />
                <Trash2Icon
                  color="red"
                  size={30}
                  className="cursor-pointer"
                  onClick={() => handleDeleteMemeber(index)}
                />
              </div>
            </div>
          </CardFooter>
        ))}
    </Card>
  );
}

export default FirstWinnerPage;
